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
import { selectUser, selectUserParams } from 'store/auth/selector';
import { updateAvatar } from 'store/auth/operations';
import { useState } from 'react';

function UserCard() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const [avatar, setAvatar] = useState(user.avatarURL);
  const dailyBMR = useSelector(selectUserParams);
    
  const avatarUser = <UserPhoto src={avatar} alt="UserPhoto" width="100%" />;
  const avatarSvg = (
    <UserSvg>
      <use href={`${sprite}#icon-user`}></use>
    </UserSvg>
  );

  const dailyCalorieIntake = dailyBMR.bmr;
  const dailyNormOfSport = 110;

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    //setAvatar(e.target.files[0]);
    
    if (file) {
      setAvatar(e.target.files[0]);
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatar(objectURL);
    }

    if (typeof(file) != "undefined") {
      dispatch(updateAvatar(file)) 
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
          value= {dailyCalorieIntake}
        />
        <DailyBlock
          color="#E6533C"
          border="1px solid rgba(239, 237, 232, 0.2)"
          iconId="icon-dumbbell"
          text="Daily physical activity"
          value={`${dailyNormOfSport} min`}
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
