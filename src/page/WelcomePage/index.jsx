import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WelcomePageBoxStyled } from './WelcomePage.styled';
import Welcome from 'components/Welcome';
import Section from 'components/Section';
import StatisticsList from 'components/statistic/StatisticsList';
import { selectStatistic } from 'store/statistic/statisticSelector';
import { getStatisticThunk } from 'store/statistic/statisticThunk';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistic);

  useEffect(() => {
    console.log(statistics);
    if (!Object.keys(statistics).length) {
      dispatch(getStatisticThunk());
    }
  }, [dispatch, statistics]);

  return (
    <Section use={'first'}>
      <WelcomePageBoxStyled className="container">
        <Welcome />
        <StatisticsList statistics={statistics} />
      </WelcomePageBoxStyled>
    </Section>
  );
};

export default WelcomePage;
