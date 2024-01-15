// Logo є посиланням, по clickу на яке неавторизованого користувача переадресовує на Welcome page, авторизованого  - на Diary page або Profile page(якщо на backendі відсутня інформація про параметри авторизованого користувача)

import { LogoDumbbells, LogoPowerPulse } from 'components/Logo/Logo.styled';
import sprite from '../../images/sprite.svg';

function Logo() {
  return (
    <div>
      <LogoDumbbells>
        <use href={`${sprite}#icon-logo`} />
      </LogoDumbbells>
      <LogoPowerPulse>
        <use href={`${sprite}#icon-power-pulse`} />
      </LogoPowerPulse>
    </div>
  );
}

export default Logo;
