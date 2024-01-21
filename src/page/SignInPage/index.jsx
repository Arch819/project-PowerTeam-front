import SignInForm from 'components/Forms/SignInForm';
import Section from 'components/Section';
import StatisticsList from 'components/statistic/StatisticsList';
import {
  StyledContainer,
  StyledNavLink,
  StyledParagraf,
  StyledSignUpTitle,
  StyledTextRedirection,
  StyledWrapperTemplate,
} from 'page/SignUpPage/SignUpPage.styled';

const SignInPage = () => {
  return (
    <Section use={'first'}>
      <StyledContainer>
        <StyledWrapperTemplate>
          <StyledSignUpTitle>Sign In</StyledSignUpTitle>
          <StyledParagraf>
            Welcome! Please enter your credentials to login to the platform:
          </StyledParagraf>
          <SignInForm />
          <StyledTextRedirection>
            Don’t have an account?{' '}
            <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          </StyledTextRedirection>
        </StyledWrapperTemplate>
        <StatisticsList />
      </StyledContainer>
    </Section>
  );
};

export default SignInPage;
