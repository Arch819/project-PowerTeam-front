import styled from 'styled-components';

export const PageProfileContainer = styled.div`
  padding-top: 100px;
  @media (min-width: 768px) {
    padding-top: 156px;
  }
`;

export const ProfileTitle = styled.h2`
  color: var(--color-text-primary);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
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
