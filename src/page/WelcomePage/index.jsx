import { WelcomePageBoxStyled } from './WelcomePage.styled';
import Welcome from 'components/Welcome';
import Section from 'components/Section';
import StatisticsList from 'components/statistic/StatisticsList';

const WelcomePage = () => {
  return (
    <Section use={'first'}>
      <WelcomePageBoxStyled className="container">
        <Welcome />
        <StatisticsList />
      </WelcomePageBoxStyled>
    </Section>
  );
};

export default WelcomePage;
