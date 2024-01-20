import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: 1.28;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 16px;
    line-height: 1.5;
  }

  &:hover {
    color: #e6533c;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
`;

export const TitleBox = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
