// import { useSelector } from 'react-redux';
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
// import { selectExercises } from 'store/diary/diarySelectors';

const DayExercisesMobile = () => {
  // const exercises = useSelector(selectExercises);
  const exercises = [
    {
      exerciseId: '64f2458d6f67bdddddc34bae4f802',
      time: 1,
      burnedCalories: 100,
      bodyPart: 'upper legs',
      equipment: 'body weight',
      name: 'balance board',
      target: 'quads',
    },
    {
      exerciseId: '64f2458d6f67bcddggggg34bae4f802',
      time: 1,
      burnedCalories: 100,
      bodyPart: 'upper legs',
      equipment: 'body weight',
      name: 'balance board',
      target: 'quads',
    },
    {
      exerciseId: '64f2458d6f67fcvbc34bae4f802',
      time: 1,
      burnedCalories: 100,
      bodyPart: 'upper legs',
      equipment: 'body weight',
      name: 'balance board',
      target: 'quads',
    },
    {
      exerciseId: '64f2458d6f67fcvbc34bafffe4f802',
      time: 1,
      burnedCalories: 100,
      bodyPart: 'upper legs',
      equipment: 'body weight',
      name: 'balance board',
      target: 'quads',
    },
  ];
  return (
    <DayExercisesContainer>
      <DayExercisesHeader>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <AddExerciseButton to="/exercises">
          Add exercise
          <svg width="16" height="16">
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </AddExerciseButton>
      </DayExercisesHeader>
      <ExerciseList>
        {exercises.length > 0 ? (
          <DayExerciseItemMobile exercises={exercises} />
        ) : (
          <DayExercisesPlug />
        )}
      </ExerciseList>
    </DayExercisesContainer>
  );
};

export default DayExercisesMobile;
