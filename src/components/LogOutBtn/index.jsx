// По clickу на кнопку має відправлятися запит на backend, який видаляє активну сесію користувача.

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification.
// Якщо запит на backend пройшов успішно - користувача має переадресувати на публічну сторінку Welcome page.

// Незалежно від відповіді backenda, користувача слід деавторизувати "на клієнті", очистивши при цьому redux store  та localStorage.

import sprite from '../../images/sprite.svg';
import { IconLogoutStyled, LogoutStyled } from './LogOutBtn.styled';

// Треба зробити dispatch для logoutUser, const handleLogOut та додати на onClick у LogoutStyled.

function LogOutBtn() {
  return (
    <>
      <LogoutStyled to="/welcome">
        <span>Logout</span>
        <IconLogoutStyled>
          <use href={`${sprite}#icon-logout`} />
        </IconLogoutStyled>
      </LogoutStyled>
    </>
  );
}

export default LogOutBtn;
