import sprite from 'images/sprite.svg';
import {
  StatisticItemLStyled,
  StatisticLDescStyled,
  StatisticLSvgBoxStyled,
  StatisticLTextBoxStyled,
  StatisticLTitleStyled,
} from './StatisticItemL.styled';

function StatisticItemL({ icon, title, desc }) {
  return (
    <StatisticItemLStyled>
      <StatisticLSvgBoxStyled>
        <svg>
          <use href={`${sprite}#${icon}`} />
        </svg>
      </StatisticLSvgBoxStyled>
      <StatisticLTextBoxStyled>
        <StatisticLTitleStyled>{title}</StatisticLTitleStyled>
        <StatisticLDescStyled>{desc}</StatisticLDescStyled>
      </StatisticLTextBoxStyled>
    </StatisticItemLStyled>
  );
}

export default StatisticItemL;
