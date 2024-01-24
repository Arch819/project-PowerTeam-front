import { useSelector } from 'react-redux';
import DayExerciseItemMobile from '../DayExerciseItemMobile';
import sprite from '../../../../images/sprite.svg';
import {
  AddExerciseButton,
  DayExercisesContainer,
  DayExercisesHeader,
  ExerciseList,
  ExercisesTitle,
} from './index.styled';
import DayExercisesPlug from '../DayExercisesPlug';
import { selectExercises } from 'store/diary/diarySelectors';

const DayExercisesMobile = () => {
  const exercises = useSelector(selectExercises);
  return (
    <DayExercisesContainer $exercises={exercises}>
      <DayExercisesHeader>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <AddExerciseButton to="/exercises">
          Add exercise
          <svg width="16" height="16">
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </AddExerciseButton>
      </DayExercisesHeader>
      {exercises.length > 0 ? (
        <ExerciseList>
          <DayExerciseItemMobile exercises={exercises} />
        </ExerciseList>
      ) : (
        <DayExercisesPlug />
      )}
    </DayExercisesContainer>
  );
};

export default DayExercisesMobile;
