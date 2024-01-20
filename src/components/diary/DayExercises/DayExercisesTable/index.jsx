// import { useSelector } from 'react-redux';
import DayExerciseItem from '../DayExerciseItem';
import {
  AddExerciseButton,
  ExercisesHeader,
  ExercisesSection,
  ExercisesTable,
  ExercisesTableThead,
  ExercisesTitle,
  TableTitle,
  TableTitleCalories,
  TableWrapper,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import DayExercisesMobile from '../DayExercisesMobile';
import DayExercisesPlug from '../DayExercisesPlug';
// import { selectExercises } from 'store/diary/diarySelectors';

const DayExercises = () => {
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
  const { matches } = window.matchMedia('(min-width:768px)');
  return matches ? (
    <ExercisesSection>
      <ExercisesHeader>
        <ExercisesTitle>exercises</ExercisesTitle>
        <AddExerciseButton to="/exercises">
          Add exercise
          <svg width="16" height="16">
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </AddExerciseButton>
      </ExercisesHeader>
      {exercises.length > 0 ? (
        <TableWrapper>
          <ExercisesTable>
            <ExercisesTableThead>
              <tr>
                <TableTitle>Body Part</TableTitle>
                <TableTitle>Equipment</TableTitle>
                <TableTitle>Name</TableTitle>
                <TableTitle>Target</TableTitle>
                <TableTitleCalories>Burned Calories</TableTitleCalories>
                <TableTitle>Time</TableTitle>
              </tr>
            </ExercisesTableThead>
            <tbody>
              <DayExerciseItem exercises={exercises} />
            </tbody>
          </ExercisesTable>
        </TableWrapper>
      ) : (
        <DayExercisesPlug />
      )}
    </ExercisesSection>
  ) : (
    <DayExercisesMobile />
  );
};

export default DayExercises;
