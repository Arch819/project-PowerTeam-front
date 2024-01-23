import { useSelector } from 'react-redux';
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
import MediaQuery from 'react-responsive';
import { selectExercises } from 'store/diary/diarySelectors';

const DayExercises = () => {
  const exercises = useSelector(selectExercises);
  return (
    <>
      <MediaQuery minWidth={768}>
        <ExercisesSection>
          <ExercisesHeader>
            <ExercisesTitle>Exercises</ExercisesTitle>
            <AddExerciseButton to="/exercises">
              Add exercise
              <svg width="16" height="16">
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </AddExerciseButton>
          </ExercisesHeader>
          {exercises && exercises?.length > 0 ? (
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
                    <th></th>
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
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <DayExercisesMobile />
      </MediaQuery>
    </>
  );
};

export default DayExercises;
