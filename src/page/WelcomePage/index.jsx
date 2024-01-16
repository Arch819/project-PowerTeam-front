import Section from 'components/Section';
import Welcome from 'components/Welcome';
import StatisticsList from 'components/statistic/StatisticsList';
import { WelcomePageBoxStyled } from './WelcomePage.styled';

function WelcomePage() {
  return (
    <Section>
      <WelcomePageBoxStyled className="container">
        <Welcome />
        <StatisticsList />
      </WelcomePageBoxStyled>
    </Section>
  );
}

export default WelcomePage;
