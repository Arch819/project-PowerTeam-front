import styled from 'styled-components';

export const DayExerciseItem = styled.li`
  margin-bottom: 40px;
`;

export const ExercisesTitle = styled.p`
  color: #ef8964;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80px;
`;

export const ExercisesText = styled.p`
  color: #efede8;
  font-size: 14px;
  line-height: 1.3;
  padding: 10px 14px;
  margin-bottom: 16px;
  width: 297px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
`;

export const ExercisesTextTarget = styled(ExercisesText)`
  width: 81px;
`;

export const ExercisesTextCalories = styled(ExercisesText)`
  width: 80px;
`;

export const ExercisesTextTime = styled(ExercisesText)`
  width: 76px;
  display: flex;
  align-items: center;
  gap: 8px;
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
`;

export const ExerciseItemContainer = styled.div`
  margin-right: 16px;
`;

// export const ScrollbarContainer = styled.div`
//   overflow-y: scroll;
//   height: 158px;
// `;
