import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  width: 335px;
  height: 824px;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 40px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const ProductsTitle = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.3;
`;

export const AddProductButton = styled(Link)`
  color: #e6533c;
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;

export const ProductList = styled.ul`
  overflow-y: scroll;
  max-height: 752px;
  width: 311px;
`;
