import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  padding: 12px 20px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 19px 32px;
  }

  @media (min-width: 1440px) {
    padding: 19px 96px;
  }
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
  color: #efede8;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #e6533c;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &.active {
    background-color: #e6533c;
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
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: #e6533c;
  }
`;

export const IconBurgerMenuStyled = styled.svg`
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  fill: ${props => props.color || 'none'};
  stroke: ${props => props.color || '#E6533C'};
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: ${props => props.size || '32px'};
    height: ${props => props.size || '32px'};
  }
`;
