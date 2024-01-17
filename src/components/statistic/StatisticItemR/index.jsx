import sprite from 'images/sprite.svg';
import {
  StatisticItemRStyled,
  StatisticRDescStyled,
  StatisticRSvgBoxStyled,
  StatisticRTextBoxStyled,
  StatisticRTitleStyled,
} from './StatisticItemR.styled';

function StatisticItemR({ icon, title, desc }) {
  return (
    <StatisticItemRStyled>
      <StatisticRSvgBoxStyled>
        <svg>
          <use href={`${sprite}#${icon}`} />
        </svg>
      </StatisticRSvgBoxStyled>
      <StatisticRTextBoxStyled>
        <StatisticRTitleStyled>{title}</StatisticRTitleStyled>
        <StatisticRDescStyled>{desc}</StatisticRDescStyled>
      </StatisticRTextBoxStyled>
    </StatisticItemRStyled>
  );
}

export default StatisticItemR;
