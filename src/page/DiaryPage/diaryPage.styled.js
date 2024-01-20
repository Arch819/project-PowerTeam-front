const { styled } = require('styled-components');

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 20px auto;
  @media screen and (min-width: 768px) {
    margin: 52px 0 32px auto;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const MainContentContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const ItemsContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 64px;
  }
`;
