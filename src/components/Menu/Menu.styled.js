import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const BackdropBurgerMenuStyled = styled.div`
  position: fixed;
  /* top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh; */

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
  /* position: relative; */
  /* right: 0; */
  position: fixed;
  right: 0;
  top: 0;
  margin-left: auto;
  padding: 20px;
    /* width: 200px; */
  /* width: 53%; */
  width: 50%;
  /* height: 100vh; */
  height: 100%;
  z-index: 1000;
  background-color: #e6533c;


/* transition: all 3s ease 0s; */
 


  
  /* display: flex;
    justify-content: center;
    align-items: center; */
  /* transform: translate(100%, 0);  */
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* @media (max-width: 374px) {
    max-width: 200px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 200px;
  } */

  @media (min-width: 769px) and (max-width: 1440px) {
    /* width: 350px; */
    /* width: 45%; */
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
  border: 1px solid rgba(239, 237, 232, 0.20);
  border-radius: 12px;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
