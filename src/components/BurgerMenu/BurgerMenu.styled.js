import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const BackdropBurgerMenuStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: #04040466;
`;

export const ContainerBurgerMenuStyled = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin-left: auto;
  padding: 20px;
  width: 50%;
  height: 100%;
  z-index: 1000;
  background-color: #e6533c;

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 26px 32px 32px 32px;
  }
`;

export const ContainerIconCloseStyled = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: white;
  top: 19px;
  right: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 32px;
    width: 32px;
    height: 32px;
  }
`;

export const IconCloseMenu = styled.svg`
  width: 24px;
  height: 24px;
  fill: #efede8;
  cursor: pointer;

  &:hover,
  &:focus {
    transform-origin: center center;
    transform: scale(1.5);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const NavContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(100%);
`;

export const BurgerMenuNavLinkStyled = styled(NavLink)`
  color: #efede8;
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  &:hover,
  &:focus {
    border-color: #efede8;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &.active {
    border-color: #efede8;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BurgerMenuLogOutStyled = styled(Link)`
  position: absolute;
  bottom: 32px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BurgerMenuIconLogoutStyled = styled.svg`
  fill: transparent;
  stroke: #efede8;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
