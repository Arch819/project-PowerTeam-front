import Header from 'components/Header';
import { Loader } from 'components/Loader';
import { notiflixMessage } from 'helpers/notiflixMessage';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectError, selectIsLoading } from 'store/appState/selectors';

const Layout = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    error && notiflixMessage('error', error);
  });
  return (
    <>
      <Header />
      <main>
        {loading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
