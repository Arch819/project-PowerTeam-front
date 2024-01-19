import Notiflix from 'notiflix';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { registerUser } from 'store/auth/operations';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .matches(emailPattern, 'Doesn`t look like a valid email')
    .required('Please enter your email address'),
  password: Yup.string().min(6).required('Please enter your password'),
});

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

const SignUpForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      validationSchema
        .validate(values, { abortEarly: false })
        .then(() => {
          dispatch(registerUser(values));
          actions.resetForm();
          Notiflix.Notify.Success(
            'You have been successfully registered! Press Sign in button and enter your email and password, please.'
          );
        })
        .catch(errors => {
          if (errors.inner) {
            errors.inner.forEach(error => {
              actions.setFieldError(error.path, error.message);
            });
          } else {
            Notiflix.Notify.Success('All fields are validated successfully!');
          }
          Notiflix.Notify.Failure(
            'Validation failed. Please check the fields.'
          );
        });
    },
    validationSchema: validationSchema,
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
          error={formik.errors.name && formik.touched.name}
          active={formik.touched.name || formik.values.name !== ''}
        >
          Name
        </StyledLabel>
        <StyledInput
          name="name"
          type="text"
          placeholder=""
          error={formik.errors.name && formik.touched.name}
          success={
            !formik.errors.name && formik.touched.name && formik.values.name
          }
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {(formik.errors.name && formik.touched.name) ||
        (!formik.errors.name && formik.touched.name) ? (
          <ValidationIcon
            error={formik.errors.name}
            touched={formik.touched.name}
            errorText={formik.errors.name}
            successText={`Welcome ${formik.values.name}!`}
          />
        ) : null}
      </StyledInputContainer>

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

      <SubmitButton type="submit">Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
