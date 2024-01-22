import UserForm from 'components/Forms/UserForm';
import UserCard from 'components/UserCard';
import TitlePage from 'components/TitlePage';
import { PageProfileContainer, PageProfileThumb } from './PageProfile.styled';
import Section from 'components/Section';

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
