import SignUpForm from 'components/Forms/SignUpForm';
import Section from 'components/Section';
import {
  StyledWrapperTemplate,
  StyledSignUpTitle,
  StyledParagraf,
  StyledTextRedirection,
  StyledNavLink,
} from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <Section use={'first'}>
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
    </Section>
  );
};

export default SignUpPage;
