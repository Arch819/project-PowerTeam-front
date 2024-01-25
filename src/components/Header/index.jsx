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
  AllWrapper,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'store/auth/selector';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { bodyData } = useSelector(selectUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer current={isLoggedIn}>
      <div className="container">
        <AllWrapper>
          <nav>
            <Link aria-label="Welcome page" to="/">
              <Logo />
            </Link>
          </nav>
          {isLoggedIn && (
            <>
              <NavStyled>
                <NavWrapper>
                  <MediaQuery minWidth={1440}>
                    {bodyData && (
                      <WrapperNavLinkStyled>
                        <NavLinkStyled aria-label="Diary" to="/diary">
                          Diary
                        </NavLinkStyled>
                        <NavLinkStyled aria-label="Products" to="/products">
                          Products
                        </NavLinkStyled>
                        <NavLinkStyled aria-label="Exercises" to="/exercises">
                          Exercises
                        </NavLinkStyled>
                      </WrapperNavLinkStyled>
                    )}
                  </MediaQuery>

                  <WrapperNavLinkStyled>
                    <LinkSettingsStyled
                      aria-label="Profile settings"
                      to="/profile"
                    >
                      <UserBar />
                    </LinkSettingsStyled>

                    <MediaQuery minWidth={1440}>
                      <LogOutBtn />
                    </MediaQuery>

                    <MediaQuery maxWidth={1439}>
                      <IconBurgerMenuStyled
                        aria-label="Menu"
                        onClick={toggleMenu}
                      >
                        <use href={`${sprite}#icon-burger-menu`} />
                      </IconBurgerMenuStyled>
                    </MediaQuery>
                  </WrapperNavLinkStyled>
                </NavWrapper>
              </NavStyled>

              <MediaQuery maxWidth={1439}>
                {isMenuOpen && <BurgerMenu onClick={toggleMenu} />}
              </MediaQuery>
            </>
          )}
        </AllWrapper>
      </div>
    </HeaderContainer>
  );
}

export default Header;
