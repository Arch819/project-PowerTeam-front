// DayDashboard складається з повідомлення-попередження та 6 блоків, а саме:
//  - Daily calorie intake відображає добову норму калорій для авторизованого користувача
//  - Daily norm of sports - добову норму часу для занять спортом (в хвилинах)
//  - Сalories consumed - кількість спожитих калорій
//  - Сalories burned - кількість спалених калорій під час занять спортом
//  - The rest of the calories - кількість калорій, яку залишилось спожити користувачеві в межах добової норми. У разі перевищення добової норми калорій, блок необхідно попереджуючи підсвітити.
//  - The rest of sports -  кількістт часу, яку необхідно приділити спорту в межах добової норми часу для занять спортом. У разі перевищення добової норми калорій, блок необхідно заохочуючи підсвітити.

import { DayDashboardList, ItemThumb } from './DayDashboard.styled';

// У разі будь-якої зміни показників, відображена інформація має бути актуалізована без перезавантаження сторінки.

function DayDashboard() {
  return (
    <div>
      <DayDashboardList>
        <li>
          <ItemThumb className="accent">
            <h4>Daily calorie intake</h4>
            <p>2200</p>
          </ItemThumb>
        </li>
        <li>
          <ItemThumb className="accent">
            <h4>Daily physical activity</h4>
            <p>110 min</p>
          </ItemThumb>
        </li>
        <li>
          <ItemThumb>
            <h4>Сalories consumed</h4>
            <p>707</p>
          </ItemThumb>
        </li>
        <li>
          <ItemThumb>
            <h4>Сalories burned</h4>
            <p>855</p>
          </ItemThumb>
        </li>
        <li>
          <ItemThumb>
            <h4>Calories remaining</h4>
            <p>1493</p>
          </ItemThumb>
        </li>
        <li>
          <ItemThumb>
            <h4>Sports remaining</h4>
            <p>85 min</p>
          </ItemThumb>
        </li>
      </DayDashboardList>
      <p>
        Record all your meals in the calorie diary every day. This will help you
        be aware of your nutrition and make informed choices.
      </p>
    </div>
  );
}

export default DayDashboard;
