// Profile page "/profile"
// Складається з:
//  - компоненту TitlePage, що містить заголовок сторінки
//  - компоненту UserForm, що дозволяє користувачу змінити інформацію про нього
//  - компоненту UserCard, що містить інформацію про користувача
// Увімкнути програму зчитування з екрана

import UserForm from 'components/Forms/UserForm';
import { PageProfileContainer } from './PageProfile.styled';

// Містить заоголовок сторінки та має бути реалізований, як універсальний компонент, що можна використати на інших сторінках застосунку

const ProfilePage = () => {
  return (
    <PageProfileContainer className="container">
      <h2>Profile Settings</h2>
      <UserForm />
    </PageProfileContainer>
  );
};

export default ProfilePage;
