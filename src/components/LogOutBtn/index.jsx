import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { IconLogoutStyled, LogoutStyled } from './LogOutBtn.styled';
import { logOutUser } from 'store/auth/operations';
import { notiflixConfirmLogout } from 'helpers/notiflixMessage';

function LogOutBtn() {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await notiflixConfirmLogout('logout');
      dispatch(logOutUser());
    } catch (error) {
      return;
    }
  };

  return (
    <>
      <LogoutStyled aria-label="Logout" onClick={handleLogOut}>
        <span>Logout</span>
        <IconLogoutStyled aria-label="Icon logout">
          <use href={`${sprite}#icon-logout`} />
        </IconLogoutStyled>
      </LogoutStyled>
    </>
  );
}

export default LogOutBtn;
