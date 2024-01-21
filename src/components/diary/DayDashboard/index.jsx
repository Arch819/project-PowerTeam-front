// DayDashboard складається з повідомлення-попередження та 6 блоків, а саме:
//  - Daily calorie intake відображає добову норму калорій для авторизованого користувача
//  - Daily norm of sports - добову норму часу для занять спортом (в хвилинах)
//  - Сalories consumed - кількість спожитих калорій
//  - Сalories burned - кількість спалених калорій під час занять спортом
//  - The rest of the calories - кількість калорій, яку залишилось спожити користувачеві в межах добової норми. У разі перевищення добової норми калорій, блок необхідно попереджуючи підсвітити.
//  - The rest of sports -  кількістт часу, яку необхідно приділити спорту в межах добової норми часу для занять спортом. У разі перевищення добової норми калорій, блок необхідно заохочуючи підсвітити.
// У разі будь-якої зміни показників, відображена інформація має бути актуалізована без перезавантаження сторінки.

import { useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import DayDashboardItem from '../DayDashboardItem';

import { selectExercises, selectProducts } from 'store/diary/diarySelectors.js';
import {
  Box,
  DayDashboardList,
  IconWarning,
  TextWarning,
  Thumb,
} from './DayDashboard.styled';
import { selectUserParams } from 'store/auth/selector';

function DayDashboard() {
  const diaryProducts = useSelector(selectProducts);
  const diaryExercises = useSelector(selectExercises);
  const dailyBMR = useSelector(selectUserParams);
  console.log(dailyBMR.bmr);
  //  - Daily calorie intake відображає добову норму калорій для авторизованого користувача
  const dailyCalorieIntake = dailyBMR.bmr;
  //  - Daily norm of sports - добову норму часу для занять спортом (в хвилинах)
  const dailyNormOfSports = 110;
  //  - Сalories consumed - кількість спожитих калорій
  let caloriesConsumed = 0;
  if (diaryProducts) {
    caloriesConsumed = diaryProducts.reduce((prev, number) => {
      return prev + number.calories;
    }, 0);
  }
  //  - Сalories burned - кількість спалених калорій під час занять спортом
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
  //  - The rest of the calories - кількість калорій, яку залишилось спожити користувачеві в межах добової норми. У разі перевищення добової норми калорій, блок необхідно попереджуючи підсвітити.
  const restOfCalories = dailyCalorieIntake - caloriesConsumed + caloriesBurned;
  //  - The rest of sports -  кількістт часу, яку необхідно приділити спорту в межах добової норми часу для занять спортом. У разі перевищення добової норми калорій, блок необхідно заохочуючи підсвітити.
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
          title={'Сalories consumed'}
          data={caloriesConsumed}
        />
        <DayDashboardItem
          color={''}
          icon={'icon-fire'}
          title={'Сalories burned'}
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
              ? `${restOfSport} min`
              : `+${Math.abs(restOfSport)} min`
          }
        />
      </DayDashboardList>
      <Thumb>
        <IconWarning>
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
