import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import { Loader } from './Loader';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import WelcomePage from 'page/WelcomePage';
import DiaryPage from 'page/DiaryPage';
import NotFoundPage from 'page/404Page';
import ProductsPage from 'page/ProductsPage';
import ExercisesPage from 'page/ExercisesPage';
import ExercisesListPage from 'page/ExercisesListPage';
import ProfilePage from 'page/ProfilePage';

const LoginPage = lazy(() => import('page/SignInPage'));
const RegistrationPage = lazy(() => import('page/SignUpPage'));

const isRefresh = false;

export const App = () => {
  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/diary" component={<WelcomePage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/diary" component={<LoginPage />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/diary"
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
          path="/exercises"
          element={
            <PrivateRoute redirectTo="/login" component={<ExercisesPage />} />
          }
        />
        <Route
          path="/exercises/:category"
          element={
            <PrivateRoute redirectTo="/" component={<ExercisesListPage />} />
          }
        />
        {/* <Route
          path="/exercises/:update"
          element={
            <PrivateRoute redirectTo="/login" component={<UpdateProfile />} />
          }
        /> */}
        <Route
          path="/profile"
          element={<PrivateRoute redirectTo="/" component={<ProfilePage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
