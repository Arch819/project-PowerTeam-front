import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: ${props => (props.position ? 'relative' : 'fixed')};
  left: 0;
  top: 0;
  right: 0;
  border-bottom: var(--border-20);
  padding: 12px 0;

  @media screen and (min-width: 768px) {
    padding: 19px 0;
  }
`;

export const AllWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  line-height: calc(24 / 16);
  padding: 10px 27px;
  color: var(--color-text-primary);
  background-color: transparent;
  border-radius: 12px;
  border: var(--border-20);
  transition: background-color var(--transition);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: var(--bg-btn);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &.active {
    background-color: var(--bg-btn);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const WrapperNavLinkStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LinkSettingsStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  stroke: ${props => props.color || 'rgba(239, 237, 232, 0.3)'};
  transition: stroke var(--transition);

  &:hover {
    stroke: var(--bg-btn);
  }
`;

export const IconBurgerMenuStyled = styled.svg`
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  fill: ${props => props.color || 'none'};
  stroke: ${props => props.color || 'var(--bg-btn)'};
  transition: stroke var(--transition);
  display: block;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--color-text-secondaryV1);
  }

  @media screen and (min-width: 768px) {
    width: ${props => props.size || '32px'};
    height: ${props => props.size || '32px'};
  }
`;
