import { useDispatch, useSelector } from 'react-redux';
import StatisticItemL from '../StatisticItemL';
import StatisticItemR from '../StatisticItemR';
import { StatisticListStyle } from './StatisticList.styled';
import { selectStatistic } from 'store/statistic/statisticSelector';
import { useEffect } from 'react';
import { getStatisticThunk } from 'store/statistic/statisticThunk';

const dataRounding = data => {
  let result = data;
  if (data > 999) {
    result = Math.trunc(data / 1000) + 'k+';
  }
  if (data > 999999) {
    result = Math.trunc(data / 1000000) + 'm+';
  }
  return result;
};

function StatisticsList() {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistic);

  useEffect(() => {
    if (!Object.keys(statistics).length) {
      dispatch(getStatisticThunk());
    }
  }, [dispatch, statistics]);
  const {
    totalVideoExercises = '250',
    totalBurnedCalories = '500',
    totalUsers = '50',
    totalTime = '1000',
    totalPerformedExercises = '120',
  } = statistics;
  return (
    <StatisticListStyle>
      <StatisticItemL
        icon="icon-play"
        title={dataRounding(totalVideoExercises)}
        desc="Video tutorial"
      />
      <StatisticItemR
        icon="icon-running-stick-figure"
        title={dataRounding(totalBurnedCalories)}
        desc="Cal"
      />
      <StatisticItemL
        icon="icon-system_user"
        title={dataRounding(totalUsers)}
        desc="Used the service"
      />
      <StatisticItemR
        icon="icon-clock_time"
        title={dataRounding(totalTime)}
        desc="Training time"
      />
      <StatisticItemL
        icon="icon-dumbbell"
        title={dataRounding(totalPerformedExercises)}
        desc="Completed trainings"
      />
    </StatisticListStyle>
  );
}

export default StatisticsList;
