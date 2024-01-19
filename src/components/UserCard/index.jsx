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
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selector';
import { updateAvatar } from 'store/auth/operations';
import { useState } from 'react';

function UserCard() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  console.log(user);
  //const avatar = 'https://res.cloudinary.com/dwkvsznn0/image/upload/v1705494709/avatars/65a79759eb56ba0d32793cf3.jpg'
  //const  avatar = '';
  //const avatar = user.avatarURL;
  const [avatar, setAvatar] = useState(user.avatarURL);
  const [file, setFile] = useState(null);
  
  const avatarUser = <UserPhoto src={avatar} alt="UserPhoto" width="100%" />;
  const avatarSvg = (
    <UserSvg>
      <use href={`${sprite}#icon-user`}></use>
    </UserSvg>
  );

  const handleAvatarChange = e => {
    //const file = e.target.files[0];
    setFile(e.target.files[0]);
    setAvatar(e.target.files[0]);
    
    console.log('file',file);
    if (file) {
      const blob = new Blob([file]);
      console.log('blob',blob);
      const objectURL = URL.createObjectURL(blob);
      console.log('objectURL',objectURL);
      setAvatar(objectURL);
    }

    try {
      dispatch(updateAvatar(file)) 
    } catch (error) {
      console.error('Error loading the file', error);
    }
  }

  return (
    <Wrapper>
      <AvatarFrame>{avatar ? avatarUser : avatarSvg}</AvatarFrame>
      <form id="upload-form">
        <input
          type="file"
          id="avatar"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
        <label htmlFor="avatar">
          <Button>
            <IconBtnSvg>
              <use href={`${sprite}#icon-upload-avatar`}></use>
            </IconBtnSvg>
          </Button>
        </label>
      </form>
      <TitleUserName>{user.name}</TitleUserName>
      <SubTitle>User</SubTitle>
      <WrapperDaily>
        <DailyBlock
          color="#E6533C"
          border="1px solid rgba(239, 237, 232, 0.2)"
          iconId="icon-food-24"
          text="Daily calorie intake"
          value="2200"
        />
        <DailyBlock
          color="#E6533C"
          border="1px solid rgba(239, 237, 232, 0.2)"
          iconId="icon-dumbbell"
          text="Daily physical activity"
          value="110 min"
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
