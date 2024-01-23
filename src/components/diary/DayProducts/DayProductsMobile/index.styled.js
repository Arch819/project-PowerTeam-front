import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  max-height: ${({ $products }) => ($products ? '824px;' : '335px')};
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 40px;
  border: var(--border-20);
  background: rgba(239, 237, 232, 0.05);
  @media (min-width: 375px) {
    width: 335px;
  }
`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const ProductsTitle = styled.p`
  color: var(--color-text-pr50);
  font-size: 14px;
  line-height: 1.3;
`;

export const AddProductButton = styled(Link)`
  color: var(--color-btn-secondary);
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-decoration: none;
`;

export const ProductList = styled.ul`
  overflow-y: scroll;
  max-height: 752px;
  @media (min-width: 375px) {
    width: 311px;
  }
`;
