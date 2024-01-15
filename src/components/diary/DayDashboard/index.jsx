// DayDashboard складається з повідомлення-попередження та 6 блоків, а саме:
//  - Daily calorie intake відображає добову норму калорій для авторизованого користувача
//  - Daily norm of sports - добову норму часу для занять спортом (в хвилинах)
//  - Сalories consumed - кількість спожитих калорій
//  - Сalories burned - кількість спалених калорій під час занять спортом
//  - The rest of the calories - кількість калорій, яку залишилось спожити користувачеві в межах добової норми. У разі перевищення добової норми калорій, блок необхідно попереджуючи підсвітити.
//  - The rest of sports -  кількістт часу, яку необхідно приділити спорту в межах добової норми часу для занять спортом. У разі перевищення добової норми калорій, блок необхідно заохочуючи підсвітити.
// У разі будь-якої зміни показників, відображена інформація має бути актуалізована без перезавантаження сторінки.

import sprite from '../../../images/sprite.svg';
import DayDashboardItem from '../DayDashboardItem';

import {
  Box,
  DayDashboardList,
  IconWarning,
  TextWarning,
  Thumb,
} from './DayDashboard.styled';

function DayDashboard() {
  return (
    <Box>
      <DayDashboardList>
        <DayDashboardItem
          color={'accent'}
          icon={'icon-food-24'}
          title={'Daily calorie intake'}
          data={2200}
        />
        <DayDashboardItem
          color={'accent'}
          icon={'icon-dumbbell'}
          title={'Daily physical activity'}
          data={'110 min'}
        />
        <DayDashboardItem
          color={''}
          icon={'icon-food-apple'}
          title={'Сalories consumed'}
          data={2300}
        />
        <DayDashboardItem
          color={''}
          icon={'icon-fire'}
          title={'Сalories burned'}
          data={855}
        />
        <DayDashboardItem
          color={'warning'}
          icon={'icon-bubble'}
          title={'Calories remaining'}
          data={-100}
        />
        <DayDashboardItem
          color={'success'}
          icon={'icon-running-stick-figure'}
          title={'Sports remaining'}
          data={'+30 min'}
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
