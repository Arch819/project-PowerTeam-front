import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useFormik } from 'formik';
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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'store/auth/operations';
import { useNavigate } from 'react-router-dom';
// import { selectToken } from 'store/auth/selector';

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

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const token = useSelector(selectToken);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      validationSchema
        .validate(values, { abortEarly: false })
        .then(() => {
          dispatch(loginUser(values))
            .then(response => {
              if (response.token) {
                // Если успешно получен токен от бэкэнда
                // Проверяем наличие информации о пользователе на бэкенде
                if (response) {
                  navigate('/diary'); // Перенаправляем на страницу дневника
                } else {
                  navigate('/profile'); // Перенаправляем на страницу профиля
                }
                Notiflix.Notify.success(
                  'You have been successfully logged in! Your session is now active.'
                );
              } else {
                Notiflix.Notify.Failure(
                  'Token was not returned from the backend'
                );
              }
            })
            .catch(error => {
              actions.setFieldError('form', error.message);
              Notiflix.Notify.Failure(
                'An error occurred during login: ' + error.message
              );
            });
        })
        .catch(errors => {
          errors.inner.forEach(error => {
            actions.setFieldError(error.path, error.message);
          });
          Notiflix.Notify.Failure(
            'Login validation failed. Please check the fields.'
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
