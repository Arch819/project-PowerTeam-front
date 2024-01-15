// UserBar(для авторизованого користувача) складається з:
//  - іконки-посилання, по clickу на яке авторизованого користувача переадресовує на Profile page
//  - елемента, що відображає поточку аватарку користувача. У разі її відсутності - зображення за замовченням

import sprite from '../../images/sprite.svg';
import { IconSettings, IconUser, IconUserWrapper } from './UserBar.styled';

// Треба зробити useSelector для userData(данні user) взяти данні зі state. useState для  avatar та loading.
// В useEffect додати useState для loading та avatar(дістати з userData) це все якщо є userData буде loading(true), якщо ні то loading(false).
// Зробити перевірку для IconUserWrapper, якщо є avatar то зробити <Img/> та стилі, якщо ні то повертає IconUser.

function UserBar() {
  return (
    <>
      <IconSettings>
        <use href={`${sprite}#icon-settings`} />
      </IconSettings>

      <IconUserWrapper>
        <IconUser>
          <use href={`${sprite}#icon-user`} />
        </IconUser>
      </IconUserWrapper>
    </>
  );
}

export default UserBar;
