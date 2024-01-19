// SignIn page "/signin"
// Складається з SignInForm та посилання на сторінку SignUp page

import SignInForm from 'components/Forms/SignInForm';
import Section from 'components/Section';

const SignInPage = () => {
  return (
    <Section use={'first'}>
      <div style={{ marginTop: '100px' }} className="container">
        <h2>Sign In</h2>
        <div style={{ marginTop: '50px' }}>
          <SignInForm />
        </div>
      </div>
    </Section>
  );
};

export default SignInPage;
