import { Formik } from 'formik';
import validationSchema from './UserFormComponents/ValidateSchema';
import PersonalInfoFields from './UserFormComponents/PersonalInfoFields';
import BloodGenderFields from './UserFormComponents/BloodGenderFields';
import NameEmailFields from './UserFormComponents/NameEmailField';
import ActivitiLevelFields from './UserFormComponents/ActivitiLevelFields';
import { StyledForm, SubmitButton } from './UserForm.styled';
import { selectUser, selectUserParams } from 'store/auth/selector';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from 'store/auth/operations';
import { bmr } from './UserFormComponents/bmr';
import { notiflixMessage } from 'helpers/notiflixMessage';

function UserForm() {
  const user = useSelector(selectUser);
  const userData = useSelector(selectUserParams);

  const { name, email, bodyData } = user;
  const {
    blood,
    levelActivity,
    height,
    currentWeight,
    desiredWeight,
    sex,
    birthday,
  } = userData;
  const initState = {
    name,
    email,
    blood: blood || 0,
    levelActivity: levelActivity || 0,
    height: height || 0,
    currentWeight: currentWeight || 0,
    desiredWeight: desiredWeight || 0,
    sex: sex || '',
    birthday,
  };
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initState}
      onSubmit={values => {
        validationSchema
          .validate(values, { abortEarly: false })
          .then(async () => {
            values = {
              ...values,
              height: Number(values.height),
              currentWeight: Number(values.currentWeight),
              desiredWeight: Number(values.desiredWeight),
              blood: Number(values.blood),
              levelActivity: Number(values.levelActivity),
            };
            values.bmr = bmr(values);
            const req = await dispatch(updateProfile(values));

            if (req.meta.requestStatus === 'fulfilled' && bodyData) {
              notiflixMessage('ok', 'Data changed successfully.');
            } else if (req.meta.requestStatus === 'fulfilled') {
              notiflixMessage('ok', 'Data added successfully.');
            }
          })
          .catch(error => {
            notiflixMessage('error', `Validation errors: ${error.errors}`);
          });
      }}
    >
      {({ values, setFieldValue, dirty }) => (
        <StyledForm>
          <NameEmailFields name={values.name} email={values.email} />

          <PersonalInfoFields
            height={values.height}
            currentWeight={values.currentWeight}
            desiredWeight={values.desiredWeight}
            birthday={values.birthday}
            onChange={date => {
              setFieldValue('birthday', date);
            }}
          />

          <BloodGenderFields blood={values.blood} sex={values.sex} />

          <ActivitiLevelFields levelActivity={values.levelActivity} />
          <SubmitButton type="submit" disabled={!dirty}>
            Save
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default UserForm;
