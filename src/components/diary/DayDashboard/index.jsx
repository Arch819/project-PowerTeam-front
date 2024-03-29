import { useSelector } from 'react-redux';
import { selectUserParams } from 'store/auth/selector';
import { selectExercises, selectProducts } from 'store/diary/diarySelectors.js';
import sprite from '../../../images/sprite.svg';
import DayDashboardItem from '../DayDashboardItem';
import {
  Box,
  DayDashboardList,
  IconWarning,
  TextWarning,
  Thumb,
} from './DayDashboard.styled';
import formatTime from 'helpers/fomatTime';

function DayDashboard() {
  const diaryProducts = useSelector(selectProducts);
  const diaryExercises = useSelector(selectExercises);
  const dailyBMR = useSelector(selectUserParams);

  const dailyCalorieIntake = dailyBMR.bmr;
  const dailyNormOfSports = 110;
  let caloriesConsumed = 0;
  if (diaryProducts) {
    caloriesConsumed = diaryProducts.reduce((prev, number) => {
      return prev + number.calories;
    }, 0);
  }
  let caloriesBurned = 0;
  let totalSportTime = 0;
  if (diaryExercises) {
    caloriesBurned = diaryExercises.reduce((prev, number) => {
      return prev + number.burnedCalories;
    }, 0);
    totalSportTime = diaryExercises.reduce((prev, number) => {
      return prev + number.time;
    }, 0);
  }
  const restOfCalories = dailyCalorieIntake - caloriesConsumed + caloriesBurned;
  const restOfSport = dailyNormOfSports - totalSportTime;

  return (
    <Box>
      <DayDashboardList>
        <DayDashboardItem
          color={'accent'}
          icon={'icon-food-24'}
          title={'Daily calorie intake'}
          data={dailyCalorieIntake}
        />
        <DayDashboardItem
          color={'accent'}
          icon={'icon-dumbbell'}
          title={'Daily physical activity'}
          data={`${dailyNormOfSports} min`}
        />
        <DayDashboardItem
          color={''}
          icon={'icon-food-apple'}
          title={'Calories consumed'}
          data={caloriesConsumed}
        />
        <DayDashboardItem
          color={''}
          icon={'icon-fire'}
          title={'Calories burned'}
          data={caloriesBurned}
        />
        <DayDashboardItem
          color={restOfCalories < 0 ? 'warning' : ''}
          icon={'icon-bubble'}
          title={'Calories remaining'}
          data={restOfCalories}
        />
        <DayDashboardItem
          color={restOfSport < 0 ? 'success' : ''}
          icon={'icon-running-stick-figure'}
          title={'Sports remaining'}
          data={
            restOfSport > 0
              ? `${formatTime(restOfSport)}`
              : `+${formatTime(restOfSport)}`
          }
        />
      </DayDashboardList>
      <Thumb>
        <IconWarning aria-label="icon-warning">
          <use href={`${sprite}#icon-warning`} />
        </IconWarning>
        <TextWarning>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </TextWarning>
      </Thumb>
    </Box>
  );
}

export default DayDashboard;
