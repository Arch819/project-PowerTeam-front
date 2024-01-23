import styled from 'styled-components';

export const DayExerciseItem = styled.li`
  margin-bottom: 40px;
`;

export const ExercisesTitle = styled.p`
  color: var(--color-text-secondaryV1);
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80px;
`;

export const ExercisesText = styled.p`
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 1.3;
  padding: 10px 14px;
  margin-bottom: 16px;
  height: 38px;
  border-radius: 12px;
  border: var(--border-30);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 375px) {
    width: 297px;
    max-width: 297px;
  }
`;

export const ExercisesTextTarget = styled(ExercisesText)`
  @media (min-width: 375px) {
    width: 81px;
    max-width: 81px;
  }
`;

export const ExercisesTextCalories = styled(ExercisesText)`
  @media (min-width: 375px) {
    width: 80px;
    max-width: 80px;
  }
`;

export const ExercisesTextTime = styled(ExercisesText)`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 375px) {
    width: 76px;
    max-width: 76px;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;
  padding-top: 4px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ExerciseItemContainer = styled.div`
  margin-right: 16px;
`;
