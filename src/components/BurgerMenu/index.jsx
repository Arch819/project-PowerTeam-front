import { useEffect } from 'react';
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

function BurgerMenu({ onClose }) {
  // Треба зробити dispatch для logoutUser, const handleLogOut та додати на onClick у BurgerMenuLogOutStyled, та зробити logoutUser у redux/auth/operations.

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCloseClick = () => {
    onClose();
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
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
          <NavContainerStyled>
            <BurgerMenuNavLinkStyled to="/diary">Diary</BurgerMenuNavLinkStyled>
            <BurgerMenuNavLinkStyled to="/products">
              Products
            </BurgerMenuNavLinkStyled>
            <BurgerMenuNavLinkStyled to="/exercises">
              Exercises
            </BurgerMenuNavLinkStyled>
          </NavContainerStyled>

          <BurgerMenuLogOutStyled to="/welcome">
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
