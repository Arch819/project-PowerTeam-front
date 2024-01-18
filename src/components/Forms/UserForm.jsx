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
import { useState } from 'react';

function UserForm() {
  const [initState, setInitState] = useState({
    name: 'Antonio Banderas',
    email: 'banderas@mail.com',
    height: '0',
    currentWeight: '0',
    desiredWeight: '0',
    dateOfBirth: null,
    blood: '',
    gender: '',
    activitiLevel: '',
  });

  const handleDateChange = date => {
    setInitState(prevState => ({
      ...prevState,
      dateOfBirth: date,
    }));
  };

  return (
    <Formik
      initialValues={initState}
      onSubmit={values => {
        validationSchema
          .validate(values, { abortEarly: false })
          .then(() => {
            console.log('Success:', values);
          })
          .catch(error => {
            console.log('Validation errors:', error.errors);
          });
      }}
    >
      {({ setFieldValue }) => (
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
              handleDateChange(date);
              setFieldValue('dateOfBirth', date);
            }}
          />

          {/* Група крові + гендер */}
          <BloodGenderFields
            blood={initState.blood}
            gender={initState.gender}
          />

          {/* {Рівень фізичної активності} */}
          <ActivitiLevelFields activitiLevel={initState.activitiLevel} />
          <SubmitButton type="submit">Save</SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default UserForm;
