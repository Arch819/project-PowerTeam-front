// SignIn page "/signin"
// Складається з SignInForm та посилання на сторінку SignUp page

import SignInForm from 'components/Forms/SignInForm';
import Section from 'components/Section';

const SignInPage = () => {
  return (
    <Section use={'first'}>
      <div className="container">
        <h2>Sign In</h2>
        <SignInForm />
      </div>
    </Section>
  );
};

export default SignInPage;
