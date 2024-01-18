import styled from 'styled-components';

export const NoResultWrapper = styled.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NoResultText = styled.p`
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.3;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 16px;
    color: rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const NoResultOrangeText = styled.span`
  @media screen and (min-width: 375px) {
    color: var(--color-btn-secondary);
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
