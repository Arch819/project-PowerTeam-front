import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 5px 80px;

  @media screen and (min-width: 375px) {
    max-width: 375px;
    padding: 0 5px 75px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 17px 27px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 81px 40px;
  }
`;

export const NavBox = styled.div`
  padding: 40px 15px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 72px;
    padding-bottom: 64px;
  }
`;
