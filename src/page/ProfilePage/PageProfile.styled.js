import styled from 'styled-components';

export const PageProfileContainer = styled.div`
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 72px;
  }
`;

export const PageProfileThumb = styled.div`
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 64px;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 32px;
  }
`;
