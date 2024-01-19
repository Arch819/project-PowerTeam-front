// UserForm містить поточні зареєстровані дані користувача та має бути реалізована за допомогою бібліотек Formik + Yup, що надає можливість:
//  - змінити імʼя
//  - змінити параметри зросту, поточної ваги, бажаної ваги та дату народження
//  - змінити групу крові, стать та рівень активності життя

// Кнопка Save(типу "submit") - відправляє запит на backend для оновлення параметрів поточного користувача. У разі, якщо UserForm містить інформацію і вона повністю відповідає інформації, зареєстрованій на backendі, кнопка має бути неактивною.

// name - string, required
// height - number; minimum 150(cm); required
// currentWeight - number; minimum 35(kg); required
// desiredWeight - number; minimum 35(kg); required
// birthday - date; must be older than 18 years;  required
// blood - number; allowed values 1, 2, 3, 4; required
// sex - string; allowed values "male", "female"; required
// levelActivity - number; allowed values 1, 2, 3, 4, 5; required

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification.

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

function UserForm() {
  const user = useSelector(selectUser);
  const userData = useSelector(selectUserParams);
  const initState = { ...user, ...userData };
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initState}
      onSubmit={values => {
        validationSchema
          .validate(values, { abortEarly: false })
          .then(() => {
            values.bodyData = true;
            dispatch(updateProfile(values));
            console.log('Success:', values);
          })
          .catch(error => {
            console.log('Validation errors:', error.errors);
          });
      }}
    >
      {({ setFieldValue, dirty }) => (
        <StyledForm>
          {/* {Ім'я та пошта} */}
          <NameEmailFields name={initState.name} email={initState.email} />

          {/* Зріст, Вага, Бажана вага, Дата народження */}
          <PersonalInfoFields
            height={initState.height}
            currentWeight={initState.currentWeight}
            desiredWeight={initState.desiredWeight}
            dateOfBirth={initState.dateOfBirth}
            onChange={date => {
              setFieldValue('birthday', date);
            }}
          />

          {/* Група крові + гендер */}
          <BloodGenderFields blood={initState.blood} sex={initState.sex} />

          {/* {Рівень фізичної активності} */}
          <ActivitiLevelFields levelActivity={initState.levelActivity} />
          <SubmitButton type="submit" disabled={!dirty}>
            Save
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default UserForm;
