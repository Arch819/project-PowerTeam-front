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
import ExerciseItemPage from 'page/ExerciseItemPage';

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
          path="/exercises/:category"
          element={
            <RestrictedRoute
              redirectTo="/exercises"
              component={<ExercisesPage />}
            />
          }
        />
        <Route
          path="/exercises/:category/:subCategory"
          element={
            <RestrictedRoute
              redirectTo="/exercises/:category/:subCategory"
              component={<ExercisesListPage />}
            />
          }
        />
        <Route
          path="/exercises/:category/:subCategory/:exId"
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
