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
import validationSchema from './UserFormsComponents/ValidateSchema';
import PersonalInfoFields from './UserFormsComponents/PersonalInfoFields';
import BloodGenderFields from './UserFormsComponents/BloodGenderFields';
import NameEmailFields from './UserFormsComponents/NameEmailField';
import ActivitiLevelFields from './UserFormsComponents/ActivitiLevelFields';
import { StyledForm, SubmitButton } from './UserForm.styled';

function UserForm() {
  const initState = {
    name: 'Antonio Banderas',
    email: 'banderas@mail.com',
    height: 190,
    currentWeight: '',
    desiredWeight: '',
    dateOfBirth: '',
    blood: '2',
    gender: 'male',
    activitiLevel: '4',
  };

  return (
    <div>
      <Formik
        initialValues={initState}
        onSubmit={values => {
          validationSchema
            .validate(values, { abortEarly: false })
            .then(() => {
              console.log('Форма валідна, відправляємо:', values);
            })
            .catch(error => {
              console.log('Validation errors:', error.errors);
            });
        }}
      >
        {() => (
          <StyledForm>
            {/* {Ім'я та пошта} */}
            <NameEmailFields name={initState.name} email={initState.email} />

            {/* Зріст, Вага, Бажана вага, Дата народження */}
            <PersonalInfoFields
              height={initState.height}
              currentWeight={initState.currentWeight}
              desiredWeight={initState.desiredWeight}
              dateOfBirth={initState.dateOfBirth}
            />

            {/* Група крові + гендер */}
            <BloodGenderFields
              blood={initState.blood}
              gender={initState.gender}
            />

            {/* {Рівень фізичної активності} */}
            <ActivitiLevelFields activitiLevel={initState.activitiLevel} />
            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
