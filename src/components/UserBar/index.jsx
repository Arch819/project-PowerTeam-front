// UserBar(для авторизованого користувача) складається з:
//  - іконки-посилання, по clickу на яке авторизованого користувача переадресовує на Profile page
//  - елемента, що відображає поточку аватарку користувача. У разі її відсутності - зображення за замовченням

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import {
  IconSettings,
  IconUser,
  IconUserWrapper,
  AvatarImg,
} from './UserBar.styled';
import { selectUser } from 'store/auth/selector';

// Треба зробити useSelector для userData(данні user) взяти данні зі state. useState для  avatar та loading.
// В useEffect додати useState для loading та avatar(дістати з userData) це все якщо є userData буде loading(true), якщо ні то loading(false).
// Зробити перевірку для IconUserWrapper, якщо є avatar то зробити <Img/> та стилі, якщо ні то повертає IconUser.

function UserBar() {
  const { avatarURL } = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (avatarURL) {
      setLoading(true);
      setImageURL(avatarURL);
    }
    setLoading(false);
  }, [avatarURL]);

  const errorImageURL = () => {
    if (imageURL) {
      setImageURL('');
      setLoading(false);
    }
  };

  return (
    <>
      <IconSettings>
        <use href={`${sprite}#icon-settings`} />
      </IconSettings>

      <IconUserWrapper border={avatarURL}>
        {avatarURL ? (
          <>
            {loading ?? (
              <IconUser>
                <use href={`${sprite}#icon-user`} />
              </IconUser>
            )}
            <AvatarImg
              src={avatarURL}
              sizes="90px"
              onError={errorImageURL}
              loading="lazy"
            />
          </>
        ) : (
          <IconUser>
            <use href={`${sprite}#icon-user`} />
          </IconUser>
        )}
      </IconUserWrapper>
    </>
  );
}

export default UserBar;
