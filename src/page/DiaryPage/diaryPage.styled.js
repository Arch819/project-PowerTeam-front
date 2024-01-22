const { styled } = require('styled-components');

export const CalendarMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 20px 0;
  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
  }
`;

export const MainContentContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const ItemsContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 64px;
  }
`;
