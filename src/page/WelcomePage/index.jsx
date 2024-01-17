import Welcome from 'components/Welcome';
import StatisticsList from 'components/statistic/StatisticsList';
import { WelcomePageBoxStyled } from './WelcomePage.styled';
import Section from 'components/Section';

function WelcomePage() {
  return (
    <Section use={'first'}>
      <WelcomePageBoxStyled className="container">
        <Welcome />
        <StatisticsList />
      </WelcomePageBoxStyled>
    </Section>
  );
}

export default WelcomePage;
