import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SuccessModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const SuccessModalWindowWrap = styled.div`
  padding: 48px 89px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 384px;
  width: 335px;

  @media screen and (min-width: 768px) {
    /* width: 100%; */
    width: 430px;
    height: 439px;
  }
`;

export const SuccessModalWindowWrapImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccessModalWindowImg = styled.img`
  width: 123px;
  height: 97px;
  margin-bottom: 32px;
`;

export const SuccessModalWindowTitle = styled.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const SuccessModalWindowText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SuccessModalWindowSpan = styled.span`
  color: #E6533C;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SuccessModalWindowBtn = styled(Link)`
  border-radius: 12px;
  background: #e6533c;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
  border: none;
  width: 157px;
  display: block;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
    font-style: 16px;

  }

  &:hover,
  &:focus {
    background: #ef8964;
    color: #efede8;
  }
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #efede8;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;