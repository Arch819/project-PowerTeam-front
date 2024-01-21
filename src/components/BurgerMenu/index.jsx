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

  return (
    <>
      <BackdropBurgerMenuStyled onClick={handleBackdropClick}>
        <ContainerBurgerMenuStyled>
          <ContainerIconCloseStyled>
            <IconCloseMenu onClick={handleCloseClick}>
              <use href={`${sprite}#icon-close`} />
            </IconCloseMenu>
          </ContainerIconCloseStyled>
          {bodyData && (
            <NavContainerStyled>
              <BurgerMenuNavLinkStyled to="/diary">
                Diary
              </BurgerMenuNavLinkStyled>
              <BurgerMenuNavLinkStyled to="/products">
                Products
              </BurgerMenuNavLinkStyled>
              <BurgerMenuNavLinkStyled to="/exercises">
                Exercises
              </BurgerMenuNavLinkStyled>
            </NavContainerStyled>
          )}
          <BurgerMenuLogOutStyled onClick={handleLogOutUser}>
            <span>Logout</span>
            <BurgerMenuIconLogoutStyled>
              <use href={`${sprite}#icon-logout`} />
            </BurgerMenuIconLogoutStyled>
          </BurgerMenuLogOutStyled>
        </ContainerBurgerMenuStyled>
      </BackdropBurgerMenuStyled>
    </>
  );
}

export default BurgerMenu;
