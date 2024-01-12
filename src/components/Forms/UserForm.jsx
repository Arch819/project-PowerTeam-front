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

function UserForm() {
  return <div></div>;
}

export default UserForm;
