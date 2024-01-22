import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding-top: 200px;
    justify-content: space-between;
  }
`;
export const StyledWrapperTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 0px;
  }
`;

export const StyledSignUpTitle = styled.h2`
  font-size: 24px;
  line-height: 1.16;
  color: var(--color-text-primary);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`;

export const StyledParagraf = styled.p`
  font-size: 14px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    max-width: 496px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
  }
`;

export const StyledTextRedirection = styled.p`
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  line-height: 1.5;
  color: var(--color-text-primary);
  text-decoration: underline;
`;
