import styled from 'styled-components';

export const TableText = styled.td`
  @media (min-width: 768px) {
    color: var(--color-text-primary);
    font-weight: 400;
    border: 1px solid rgba(239, 237, 232, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 12px;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;
    height: 40px;
    max-width: 204px;
    width: 204px;
  }
  @media (min-width: 1440px) {
    max-width: 212px;
    width: 212px;
  }
`;

export const TableTextSecond = styled(TableText)`
  @media (min-width: 768px) {
    max-width: 128px;
    width: 128px;
  }
  @media (min-width: 1440px) {
    max-width: 166px;
    width: 166px;
  }
`;

export const TableTextNext = styled(TableText)`
  @media (min-width: 768px) {
    min-width: 90px;
    width: 90px;
  }
  @media (min-width: 1440px) {
    min-width: 105px;
    width: 105px;
  }
`;

export const TableTextLast = styled(TableText)`
  @media (min-width: 768px) {
    max-width: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media (min-width: 1440px) {
    max-width: 110px;
    width: 110px;
  }
`;

export const IsRecommend = styled.span`
  @media (min-width: 768px) {
    background-color: ${({ $recommend }) =>
      $recommend ? '#419B09' : '#E9101D'};
    width: 14px;
    height: 14px;
    border-radius: 10px;
  }
`;

export const DeleteButton = styled.button`
  @media (min-width: 768px) {
    background: none;
    border: none;
    padding: 0;
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }
`;
