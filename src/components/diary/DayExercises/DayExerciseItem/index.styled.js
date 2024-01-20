import styled from 'styled-components';

export const TableText = styled.td`
  @media (min-width: 768px) {
    color: #efede8;
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
    width: 90px;
    max-width: 90px;
  }
  @media (min-width: 1440px) {
    width: 115px;
    max-width: 115px;
  }
`;

export const TableTextEquipment = styled(TableText)`
  @media (min-width: 768px) {
    min-width: 132px;
  }
  @media (min-width: 1440px) {
    min-width: 157px;
  }
`;

export const TableTextName = styled(TableText)`
  @media (min-width: 768px) {
    max-width: 128px;
  }
  @media (min-width: 1440px) {
    max-width: 131px;
  }
`;

export const TableTextTarget = styled(TableText)`
  @media (min-width: 768px) {
    max-width: 84px;
  }
  @media (min-width: 1440px) {
    max-width: 106px;
  }
`;

export const TableTextCalories = styled(TableText)`
  @media (min-width: 768px) {
    max-width: 78px;
  }
  @media (min-width: 1440px) {
    max-width: 91px;
  }
`;

export const TableTextTime = styled(TableText)`
  @media (min-width: 768px) {
    max-width: 72px;
  }
  @media (min-width: 1440px) {
    max-width: 82px;
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
  @media (min-width: 1440px) {
    margin-left: 12px;
  }
`;
