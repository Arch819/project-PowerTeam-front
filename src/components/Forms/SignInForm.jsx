import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from 'store/auth/operations';
import { notiflixMessage } from 'helpers/notiflixMessage';
import {
  Form,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
  IconWrapper,
  SvgIcon,
  ErrorMessage,
  StyledPasswordInputContainer,
  IconPasswordWrapper,
  SvgPasswordIcon,
  SubmitButton,
} from './SignForm.styled';
import sprite from 'images/sprite.svg';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const ValidationIcon = ({ error, touched, successText, errorText }) => {
  return (
    <IconWrapper>
      <SvgIcon fill={!error && touched ? '#3CBF61' : null}>
        <use href={`${sprite}#icon-checkmark`} />
      </SvgIcon>
      <ErrorMessage color={!error && touched ? '#3CBF61' : null}>
        {!error ? successText : errorText}
      </ErrorMessage>
    </IconWrapper>
  );
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      dispatch(loginUser(values)).then(() => {
        notiflixMessage(
          'ok',
          'You have been successfully logged in! Your session is now active.'
        );
        actions.resetForm();
      });
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .matches(emailPattern, 'Doesn`t look like a valid email')
        .required('Please enter your email address'),
      password: Yup.string().min(6).required('Please enter your password'),
    }),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  return (
    <form className={Form} onSubmit={formik.handleSubmit}>
      <StyledInputContainer>
        <StyledLabel
          error={formik.errors.email && formik.touched.email}
          active={formik.touched.email || formik.values.email !== ''}
        >
          Email
        </StyledLabel>
        <StyledInput
          name="email"
          type="email"
          placeholder=""
          error={formik.errors.email && formik.touched.email}
          success={
            !formik.errors.email && formik.touched.email && formik.values.email
          }
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {(formik.errors.email && formik.touched.email) ||
        (!formik.errors.email && formik.touched.email) ? (
          <ValidationIcon
            error={formik.errors.email}
            touched={formik.touched.email}
            errorText={formik.errors.email}
            successText={'Success email'}
          />
        ) : null}
      </StyledInputContainer>

      <StyledPasswordInputContainer>
        <StyledLabel
          error={formik.errors.password && formik.touched.password}
          active={formik.touched.password || formik.values.password !== ''}
        >
          Password
        </StyledLabel>
        <StyledInput
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder=""
          error={formik.errors.password && formik.touched.password}
          success={
            !formik.errors.password &&
            formik.touched.password &&
            formik.values.password
          }
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <IconPasswordWrapper onClick={togglePassword}>
          <SvgPasswordIcon>
            <use href={`${sprite}#${passwordIcon}`} />
          </SvgPasswordIcon>
        </IconPasswordWrapper>
      </StyledPasswordInputContainer>

      {(formik.errors.password && formik.touched.password) ||
      (!formik.errors.password && formik.touched.password) ? (
        <ValidationIcon
          error={formik.errors.password}
          touched={formik.touched.password}
          errorText={formik.errors.password}
          successText={'Success password'}
        />
      ) : null}

      <SubmitButton type="submit">Sign In</SubmitButton>
    </form>
  );
};

export default SignInForm;
