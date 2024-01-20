// SignUp page "/signup"
// Складається з SignUpForm та посилання на сторінку SignIn page

import SignUpForm from 'components/Forms/SignUpForm';
import Section from 'components/Section';

const SignUpPage = () => {
  return (
    <Section use={'first'}>
      <div style={{ marginTop: '100px' }} className="container">
        <h2>Sign Up</h2>
        <div style={{ marginTop: '50px' }}>
          <SignUpForm />
        </div>
      </div>
    </Section>
  );
};

export default SignUpPage;
