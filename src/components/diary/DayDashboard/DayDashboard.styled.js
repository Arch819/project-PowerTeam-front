import styled from 'styled-components';

export const Box = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (max-width: 1399px) {
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

export const DayDashboardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 13px 20px;

  @media screen and (min-width: 768px) {
    height: 248px;
    width: 593px;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Thumb = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const IconWarning = styled.svg`
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--bg-alert);
`;

export const TextWarning = styled.p`
  display: inline-block;
  max-width: 303px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
  @media screen and (min-width: 768px) {
    max-width: 561px;
    font-size: 16px;
    line-height: 1.5;
  }
  @media screen and (min-width: 1440px) {
    max-width: 358px;
  }
`;
