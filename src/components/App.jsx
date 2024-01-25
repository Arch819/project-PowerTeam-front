import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'store/auth/selector';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Layout from './Layout';
import { Loader } from './Loader';
import WelcomePage from 'page/WelcomePage';
import DiaryPage from 'page/DiaryPage';
import NotFoundPage from 'page/404Page';
import ProductsPage from 'page/ProductsPage';
import ExercisesPage from 'page/ExercisesPage';
import ExercisesListPage from 'page/ExercisesListPage';
import ProfilePage from 'page/ProfilePage';
import ExerciseItemPage from 'page/ExerciseItemPage';
import { fetchCurrentUser } from 'store/auth/operations';
import ProductItemPage from 'page/ProductItemPage';

const LoginPage = lazy(() => import('page/SignInPage'));
const RegistrationPage = lazy(() => import('page/SignUpPage'));

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRefresh = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { bodyData } = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
    if (isLoggedIn && !bodyData) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Navigate
              to={isLoggedIn ? (!bodyData ? '/profile' : '/diary') : '/welcome'}
              replace
            />
          }
        />
        <Route
          path="/welcome"
          element={
            <RestrictedRoute
              redirectTo={bodyData ? '/diary' : '/profile'}
              component={<WelcomePage />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute
              redirectTo={bodyData ? '/diary' : '/profile'}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo={bodyData ? '/diary' : '/profile'}
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/diary"
          element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />}
        />
        <Route
          path="/products"
          element={<PrivateRoute redirectTo="/" component={<ProductsPage />} />}
        />
        <Route
          path="/products/:prodId"
          element={
            <PrivateRoute redirectTo="/" component={<ProductItemPage />} />
          }
        />
        <Route
          path="/exercises"
          element={
            <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
          }
        />
        <Route
          path="/exercises/:category"
          element={
            <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
          }
        />
        <Route
          path="/exercises/:category/:subcategory"
          element={
            <PrivateRoute redirectTo="/" component={<ExercisesListPage />} />
          }
        />
        <Route
          path="/exercises/:category/:subcategory/:exId"
          element={
            <PrivateRoute redirectTo="/" component={<ExerciseItemPage />} />
          }
        />
        <Route
          path="/profile"
          element={<PrivateRoute redirectTo="/" component={<ProfilePage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
