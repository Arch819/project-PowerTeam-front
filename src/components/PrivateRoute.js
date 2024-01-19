import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefreshing } from 'store/auth/selector';
import { selectIsLoggedIn } from 'store/auth/selector';

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefreshing);
  const shouldRedirected = !isLoggedIn && !isRefresh;

  return shouldRedirected ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
