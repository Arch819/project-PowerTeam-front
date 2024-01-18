// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'store/auth/selector';

const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
