// Додаткове завдання. У разі реалізації даного функціоналу на backendі, при першому завантаженні сторінки слід робити запит на backend за статистичною інформацією застосунку та зберігати її у redux store.
// StatisticsInfo містить інформацію про:
//  - кількість відео-тренувань у застосунку
//  - загальну кількість спалених користувачами калорій
//  - загальну кількість зареєстрованих у застосунку користувачів
//  - загальну кількість годин, проведених користувачами за тренуванням
//  - загальну кількість тренувань, виконаних користувачами

// Якщо даний функціонал не реалізовано - відобразити статичну інформацію, наведену на макеті

import StatisticItemL from '../StatisticItemL';
import StatisticItemR from '../StatisticItemR';
import { StatisticListStyle } from './StatisticList.styled';

function StatisticsList({ statistics }) {
  const {
    totalVideoExercises = '250+',
    totalBurnedCalories = '500',
    totalUsers = '50',
    totalTime = '1000',
    totalPerformedExercises = '120',
  } = statistics;
  return (
    <StatisticListStyle>
      <StatisticItemL
        icon="icon-play"
        title={totalVideoExercises}
        desc="Video tutorial"
      />
      <StatisticItemR
        icon="icon-running-stick-figure"
        title={totalBurnedCalories}
        desc="Cal"
      />
      <StatisticItemL
        icon="icon-system_user"
        title={totalUsers}
        desc="Used the service"
      />
      <StatisticItemR
        icon="icon-clock_time"
        title={totalTime}
        desc="Training time"
      />
      <StatisticItemL
        icon="icon-dumbbell"
        title={totalPerformedExercises}
        desc="Completed trainings"
      />
    </StatisticListStyle>
  );
}

export default StatisticsList;
