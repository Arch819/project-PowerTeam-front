import styled from 'styled-components';

export const DayProductItem = styled.li`
  margin-bottom: 40px;
`;

export const ProductsTitle = styled.p`
  color: var(--color-text-secondaryV1);
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const ProductsText = styled.p`
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 1.3;
  padding: 10px 14px;
  margin-bottom: 16px;
  width: 297px;
  height: 38px;
  border-radius: 12px;
  border: var(--border-30);
`;

export const ProductsTextCalories = styled(ProductsText)`
  width: 81px;
`;

export const ProductsTextWeight = styled(ProductsText)`
  width: 80px;
`;

export const ProductsTextRecommend = styled(ProductsText)`
  width: 76px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IsRecommend = styled.span`
  background-color: ${({ $recommended }) =>
    $recommended ? '#419B09' : '#E9101D'};
  width: 14px;
  height: 14px;
  border-radius: 10px;
`;

export const DeleteButton = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;
  padding-top: 4px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductItemContainer = styled.div`
  margin-right: 16px;
`;
