import styled from 'styled-components';

export const NoResultWrapper = styled.div`
  display: inline-block;
  padding-top: 24px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    padding-top: 104px;
  }
`;

export const NoResultText = styled.p`
  display: inline-block;
  line-height: 1.3;
  font-weight: 400;
  margin-bottom: 16px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const NoResultOrangeText = styled.span`
  color: var(--color-btn-secondary);
  font-size: 14px;
  line-height: 18px;
  display: inline-block;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
