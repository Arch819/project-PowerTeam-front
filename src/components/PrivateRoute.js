import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggedIn = true;
  const isRefresh = true;
  const shouldRedirected = !isLoggedIn && !isRefresh;

  return shouldRedirected ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
