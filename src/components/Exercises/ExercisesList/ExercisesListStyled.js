import styled from 'styled-components';

const ExercisesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 726px;
    gap: 32px 16px;
    overflow: auto;
    padding-bottom: 66px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-btn-secondary);
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 850px;
    height: 487px;
    gap: 30px 16px;
    padding-bottom: 0px;
  }
`;

export default ExercisesListStyled;
