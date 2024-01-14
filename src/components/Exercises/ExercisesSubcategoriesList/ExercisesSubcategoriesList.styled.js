import styled from 'styled-components';

export const SubCategoriesList = styled.ul`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 32px 16px;
  }
`;
