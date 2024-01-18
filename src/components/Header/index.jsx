// Header в собі містить:
//  незалежно від статусу користувача
//   - Logo компанії
//  для авторизованого користувача
//  - блок зі списком елементів навігації UserNav(якщо на backendі наявна інформація про параметри авторизованого користувача)
//  - блок з інформацією про поточного користувача UserBar
//  - кнопку LogOutBtn

import { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Logo from 'components/Logo';
import UserBar from 'components/UserBar';
import BurgerMenu from 'components/BurgerMenu';
import LogOutBtn from 'components/LogOutBtn';
import sprite from '../../images/sprite.svg';

import {
  IconBurgerMenuStyled,
  HeaderContainer,
  LinkSettingsStyled,
  NavLinkStyled,
  NavStyled,
  NavWrapper,
  WrapperNavLinkStyled,
} from './Header.styled';

// Треба зробити useSelector для profile(данні у profile) взяти данні зі state.
// Зробити перевірку для NavWrapper, якщо profile === null ? null, якщо ні то повертає NavWrapper.

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <NavStyled>
          <Link to="/">
            <Logo />
          </Link>

          <NavWrapper>
            <MediaQuery minWidth={1440}>
              <WrapperNavLinkStyled>
                <NavLinkStyled to="/diary">Diary</NavLinkStyled>
                <NavLinkStyled to="/products">Products</NavLinkStyled>
                <NavLinkStyled to="/exercises">Exercises</NavLinkStyled>
              </WrapperNavLinkStyled>
            </MediaQuery>

            <WrapperNavLinkStyled>
              <LinkSettingsStyled to="/profile">
                <UserBar />
              </LinkSettingsStyled>

              <MediaQuery minWidth={1440}>
                <LogOutBtn />
              </MediaQuery>

              <MediaQuery maxWidth={1439}>
                <IconBurgerMenuStyled onClick={toggleMenu}>
                  <use href={`${sprite}#icon-burger-menu`} />
                </IconBurgerMenuStyled>
              </MediaQuery>
            </WrapperNavLinkStyled>
          </NavWrapper>
        </NavStyled>

        <MediaQuery maxWidth={1439}>
          {isMenuOpen && <BurgerMenu onClose={toggleMenu} />}
        </MediaQuery>
      </div>
    </HeaderContainer>
  );
}

export default Header;
