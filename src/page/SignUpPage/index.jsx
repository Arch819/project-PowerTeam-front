import SignUpForm from 'components/Forms/SignUpForm';
import Section from 'components/Section';
import {
  StyledContainer,
  StyledWrapperTemplate,
  StyledSignUpTitle,
  StyledParagraf,
  StyledTextRedirection,
  StyledNavLink,
} from './SignUpPage.styled';
import StatisticsList from 'components/statistic/StatisticsList';

const SignUpPage = () => {
  return (
    <Section use={'first'}>
      <div className="container">
        <StyledContainer>
          <StyledWrapperTemplate>
            <StyledSignUpTitle>Sign Up</StyledSignUpTitle>
            <StyledParagraf>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </StyledParagraf>
            <SignUpForm />
            <StyledTextRedirection>
              Already have an account?{' '}
              <StyledNavLink to="/signin">Sign In</StyledNavLink>
            </StyledTextRedirection>
          </StyledWrapperTemplate>
          <StatisticsList />
        </StyledContainer>
      </div>
    </Section>
  );
};

export default SignUpPage;
