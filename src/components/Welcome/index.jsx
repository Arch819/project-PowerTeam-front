import sprite from 'images/sprite.svg';
import {
  WelcomeLinkList,
  WelcomeLinkSingInStyled,
  WelcomeLinkSingUpStyled,
  WelcomeTitleBoxStyled,
  WelcomeTitleStyled,
  WelcomeTitleSvgStyled,
  WelcomeWrapStyled,
} from './Welcome.styled';

function Welcome() {
  return (
    <WelcomeWrapStyled>
      <WelcomeTitleBoxStyled>
        <WelcomeTitleStyled>
          Transforming your body shape with Power Pulse
        </WelcomeTitleStyled>
        <WelcomeTitleSvgStyled>
          <use href={`${sprite}#icon-Line`} />
        </WelcomeTitleSvgStyled>
      </WelcomeTitleBoxStyled>
      <WelcomeLinkList>
        <li>
          <WelcomeLinkSingUpStyled to="singUp">Sign Up</WelcomeLinkSingUpStyled>
        </li>
        <li>
          <WelcomeLinkSingInStyled to="singIn">Sign In</WelcomeLinkSingInStyled>
        </li>
      </WelcomeLinkList>
    </WelcomeWrapStyled>
  );
}

export default Welcome;
