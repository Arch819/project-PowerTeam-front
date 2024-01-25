import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import {
  BackdropBurgerMenuStyled,
  ContainerIconCloseStyled,
  IconCloseMenu,
  BurgerMenuNavLinkStyled,
  BurgerMenuLogOutStyled,
  BurgerMenuIconLogoutStyled,
  ContainerBurgerMenuStyled,
  NavContainerStyled,
} from './BurgerMenu.styled';

import { logOutUser } from 'store/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selector';
import { notiflixConfirmLogout } from 'helpers/notiflixMessage';

function BurgerMenu({ onClick }) {
  const { bodyData } = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOutUser = async () => {
    try {
      await notiflixConfirmLogout('logout');
      dispatch(logOutUser());
      onClick();
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClick();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <BackdropBurgerMenuStyled onClick={handleBackdropClick}>
        <ContainerBurgerMenuStyled>
          <ContainerIconCloseStyled>
            <IconCloseMenu aria-label="Close menu" onClick={handleCloseClick}>
              <use href={`${sprite}#icon-close`} />
            </IconCloseMenu>
          </ContainerIconCloseStyled>
          {bodyData && (
            <NavContainerStyled onClick={handleCloseClick}>
              <BurgerMenuNavLinkStyled aria-label="Diary" to="/diary">
                Diary
              </BurgerMenuNavLinkStyled>
              <BurgerMenuNavLinkStyled aria-label="Products" to="/products">
                Products
              </BurgerMenuNavLinkStyled>
              <BurgerMenuNavLinkStyled aria-label="Exercises" to="/exercises">
                Exercises
              </BurgerMenuNavLinkStyled>
            </NavContainerStyled>
          )}
          <BurgerMenuLogOutStyled
            aria-label="Logout"
            onClick={handleLogOutUser}
          >
            <span>Logout</span>
            <BurgerMenuIconLogoutStyled aria-label="Icon logout">
              <use href={`${sprite}#icon-logout`} />
            </BurgerMenuIconLogoutStyled>
          </BurgerMenuLogOutStyled>
        </ContainerBurgerMenuStyled>
      </BackdropBurgerMenuStyled>
    </>
  );
}

export default BurgerMenu;
