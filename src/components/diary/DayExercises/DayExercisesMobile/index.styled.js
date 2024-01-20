import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DayExercisesContainer = styled.div`
  width: 335px;
  height: ${({ $exercises }) => ($exercises ? '1064px;' : '335px')};
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 80px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`;

export const DayExercisesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const ExercisesTitle = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.3;
`;

export const AddExerciseButton = styled(Link)`
  color: #e6533c;
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-decoration: none;
`;

export const ExerciseList = styled.ul`
  overflow-y: scroll;
  max-height: 992px;
  width: 311px;
`;