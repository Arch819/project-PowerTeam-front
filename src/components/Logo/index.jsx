import { LogoDumbbells, LogoPowerPulse } from 'components/Logo/Logo.styled';
import sprite from '../../images/sprite.svg';

function Logo() {
  return (
    <div>
      <LogoDumbbells aria-label="Logo">
        <use href={`${sprite}#icon-logo`} />
      </LogoDumbbells>
      <LogoPowerPulse aria-label="PowerPulse">
        <use href={`${sprite}#icon-power-pulse`} />
      </LogoPowerPulse>
    </div>
  );
}

export default Logo;
