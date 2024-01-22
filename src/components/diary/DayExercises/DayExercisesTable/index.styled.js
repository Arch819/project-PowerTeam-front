import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExercisesSection = styled.div`
  @media (min-width: 768px) {
    width: 335px;
    height: 824px;
    padding: 14px 16px;
    border-radius: 12px;
    border: var(--border-20);
    background: rgba(239, 237, 232, 0.05);
    overflow-y: scroll;
    width: 704px;
    height: 234px;
    padding: 16px 8px;
  }
  @media (min-width: 1440px) {
    width: 826px;
  }
`;

export const ExercisesHeader = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 8px;
  }
`;

export const ExercisesTitle = styled.p`
  @media (min-width: 768px) {
    color: var(--color-text-pr50);
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const AddExerciseButton = styled(Link)`
  @media (min-width: 768px) {
    color: var(--color-btn-secondary);
    background-color: transparent;
    border: none;
    font-weight: 500;
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: none;
  }
`;

export const TableWrapper = styled.div`
  max-height: 162px;
  overflow: auto;
  position: sticky;
  top: 0px;
`;

export const ExercisesTable = styled.table`
  @media (min-width: 768px) {
  }
  border-spacing: 8px;
  @media (min-width: 1440px) {
    margin-left: 16px;
  }
`;

export const ExercisesTableThead = styled.thead`
  position: sticky;
  top: 0px;
  background-color: rgba(16, 16, 16, 255);
`;

export const TableTitle = styled.th`
  @media (min-width: 768px) {
    color: var(--color-text-secondaryV1);
    font-size: 12px;
    line-height: 1.5;
    text-align: start;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableTitleCalories = styled(TableTitle)`
  max-width: 78px;
`;
