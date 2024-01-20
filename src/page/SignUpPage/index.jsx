// SignUp page "/signup"
// Складається з SignUpForm та посилання на сторінку SignIn page

import SignUpForm from 'components/Forms/SignUpForm';
import Section from 'components/Section';
import { StyledSignUpTitle, StyledParagraf } from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <Section use={'first'}>
      <div style={{ marginTop: '100px' }} className="container">
        <StyledSignUpTitle>Sign Up</StyledSignUpTitle>
        <div style={{ marginTop: '50px' }}>
          <StyledParagraf></StyledParagraf>
          <SignUpForm />
        </div>
      </div>
    </Section>
  );
};

export default SignUpPage;
