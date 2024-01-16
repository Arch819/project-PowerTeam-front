import styled from 'styled-components';

const ProductsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 335px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 660px;
    gap: 32px 16px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-btn-secondary);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
    gap: 30px 16px;
  }
`;

export default ProductsListStyled;
