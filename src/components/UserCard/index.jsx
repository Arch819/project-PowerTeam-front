// UserCard містить:
//  - поле для зміни аватара користувача
//  - його імʼя
//  - добову норму калорій, розраховану за поточними показниками
//  - добову норму часу для занять спортом (в хвилинах)
//  - повідомлення-попередження
//  - кнопку LogOutBtn (опис компонента деталізовано в Main layout > Header)

import sprite from '../../images/sprite.svg';
import {
  AvatarFrame,
  Button,
  IconBtnSvg,
  SubTitle,
  TitleUserName,
  UserPhoto,
  UserSvg,
  Wrapper,
  WrapperDaily,
  WrapperLogOut,
} from './UserCard.styled';
import { DailyBlock } from './DailyBlock';
import LogOutBtn from 'components/LogOutBtn';
import WarningMessage from './WarningMessage';

function UserCard() {
  //const avatar = 'https://res.cloudinary.com/dwkvsznn0/image/upload/v1705494709/avatars/65a79759eb56ba0d32793cf3.jpg'
  const avatar = '';
  const avatarUser = <UserPhoto src={avatar} alt="UserPhoto" width="100%" />;
  const avatarSvg = (
    <UserSvg>
      <use href={`${sprite}#icon-user`}></use>
    </UserSvg>
  );

  return (
    <Wrapper>
      <AvatarFrame>{avatar ? avatarUser : avatarSvg}</AvatarFrame>
      <form id="upload-form">
        <input
          type="file"
          id="avatar"
          name="file"
          style={{ display: 'none' }}
          // onChange={handleAvatarChange}
        />
        <label htmlFor="avatar">
          <Button>
            <IconBtnSvg>
              <use href={`${sprite}#icon-upload-avatar`}></use>
            </IconBtnSvg>
          </Button>
        </label>
      </form>
      <TitleUserName>"user.name"</TitleUserName>
      <SubTitle>User</SubTitle>
      <WrapperDaily>
        <DailyBlock
          color="#E6533C"
          border="1px solid rgba(239, 237, 232, 0.2)"
          iconId="icon-food-24"
          text="Daily calorie intake"
          value="user.bmr"
        />
        <DailyBlock
          color="#E6533C"
          border="1px solid rgba(239, 237, 232, 0.2)"
          iconId="icon-dumbbell"
          text="Daily physical activity"
          value="0 min"
        />
      </WrapperDaily>
      <WarningMessage />
      <WrapperLogOut>
        <LogOutBtn />
      </WrapperLogOut>
    </Wrapper>
  );
}

export default UserCard;
