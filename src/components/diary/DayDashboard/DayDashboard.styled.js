import styled from 'styled-components';

export const DayDashboardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 13px 20px;
`;

export const ItemThumb = styled.div`
  width: 157px;
  height: 96px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.accent {
    background-color: #e6533c;
  }

  &.good {
    border: 1px solid #3cbf61;
  }

  &.bad {
    border: 1px solid #e9101d;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 45px 105px;
  }

  > h4 {
    color: rgba(239, 237, 232, 0.8);
    margin: 0;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }

  > p {
    color: #efede8;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.11;
  }
`;
