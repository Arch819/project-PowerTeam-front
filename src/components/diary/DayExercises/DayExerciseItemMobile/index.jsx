import { useDispatch } from 'react-redux';

import {
  Container,
  DayExerciseItem,
  DeleteButton,
  ExercisesText,
  ExercisesTextCalories,
  ExercisesTitle,
  ExercisesTextTarget,
  ExercisesTextTime,
  ExerciseItemContainer,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import { getDeleteExerciseThunk } from 'store/diary/diaryThunk';

const DayExerciseItemMobile = ({ exercises }) => {
  const dispatch = useDispatch();
  return exercises.map(
    ({
      exerciseId,
      name,
      bodyPart,
      equipment,
      time,
      burnedCalories,
      target,
    }) => (
      <DayExerciseItem key={exerciseId}>
        <ExercisesTitle>Body Part</ExercisesTitle>
        <ExercisesText>{bodyPart}</ExercisesText>
        <ExercisesTitle>Equipment</ExercisesTitle>
        <ExercisesText>{equipment}</ExercisesText>
        <ExercisesTitle>Name</ExercisesTitle>
        <ExercisesText>{name}</ExercisesText>
        <Container>
          <ExerciseItemContainer>
            <ExercisesTitle>Target</ExercisesTitle>
            <ExercisesTextTarget>{target}</ExercisesTextTarget>
          </ExerciseItemContainer>
          <ExerciseItemContainer>
            <ExercisesTitle>Burned Calories</ExercisesTitle>
            <ExercisesTextCalories>{burnedCalories}</ExercisesTextCalories>
          </ExerciseItemContainer>
          <div>
            <ExercisesTitle>Time</ExercisesTitle>
            <ExercisesTextTime>{time}</ExercisesTextTime>
          </div>
          <DeleteButton
            type="button"
            onClick={() => dispatch(getDeleteExerciseThunk(exerciseId))}
          >
            <svg width="20px" height="20px">
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </DeleteButton>
        </Container>
      </DayExerciseItem>
    )
  );
};

export default DayExerciseItemMobile;
