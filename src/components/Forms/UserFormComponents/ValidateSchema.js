import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  height: Yup.number()
    .min(150, 'Minimum height is 150 cm')
    .max(240, 'Maximum height is 240 cm')
    .required('Height is required'),
  currentWeight: Yup.number()
    .min(35, 'Minimum weight is 35 kg')
    .required('Current weight is required'),
  desiredWeight: Yup.number()
    .min(35, 'Minimum weight is 35 kg')
    .required('Desired weight is required'),
  dateOfBirth: Yup.string()
    .required('Date of birth is required')
    .test('is-date', 'Invalid date format', value => {
      const regExp = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/;
      return regExp.test(value);
    }),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid blood group')
    .required('Blood group is required'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender')
    .required('Gender is required'),
  activitiLevel: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
    .required('Activity level is required'),
});

export default validationSchema;
