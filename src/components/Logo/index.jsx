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
