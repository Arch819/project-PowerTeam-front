import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
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
