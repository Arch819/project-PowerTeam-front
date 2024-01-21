// Profile page "/profile"
// Складається з:
//  - компоненту TitlePage, що містить заголовок сторінки
//  - компоненту UserForm, що дозволяє користувачу змінити інформацію про нього
//  - компоненту UserCard, що містить інформацію про користувача
// Увімкнути програму зчитування з екрана

import UserForm from 'components/Forms/UserForm';
import UserCard from 'components/UserCard';
import TitlePage from 'components/TitlePage';
import { PageProfileContainer, PageProfileThumb } from './PageProfile.styled';
import Section from 'components/Section';

// Містить заоголовок сторінки та має бути реалізований, як універсальний компонент, що можна використати на інших сторінках застосунку

const ProfilePage = () => {
  return (
    <Section>
      <PageProfileContainer className="container">
        <TitlePage title={'Profile Settings'} />
        <PageProfileThumb>
          <UserCard />
          <UserForm />
        </PageProfileThumb>
      </PageProfileContainer>
    </Section>
  );
};

export default ProfilePage;
