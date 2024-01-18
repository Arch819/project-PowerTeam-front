// SignUp page "/signup"
// Складається з SignUpForm та посилання на сторінку SignIn page

import SignUpForm from 'components/Forms/SignUpForm';
import Section from 'components/Section';

const SignUpPage = () => {
  return (
    <Section use={'first'}>
      <div className="container">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </Section>
  );
};

export default SignUpPage;
