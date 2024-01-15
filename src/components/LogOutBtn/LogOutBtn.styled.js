import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoutStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #efede8;
  font-size: 16px;
  line-height: calc(24 / 16);
  text-decoration: none;
`;

export const IconLogoutStyled = styled.svg`
  fill: transparent;
  stroke: #e6533c;
  width: 20px;
  height: 20px;
`;
