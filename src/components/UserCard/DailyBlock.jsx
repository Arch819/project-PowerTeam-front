import sprite from '../../images/sprite.svg';
import { ContainerBlock, SvgBlock, TextBlock, ValueBlock, WrapperBlock } from './DailyBlock.styled';

export const DailyBlock = ({ color, border, iconId, text, value }) => {
    return (
      <ContainerBlock color={color} border={border}>
        <WrapperBlock>
          <SvgBlock>
            <use href={`${sprite}#${iconId}`} />
          </SvgBlock>
          <TextBlock>{text}</TextBlock>
        </WrapperBlock>
        <ValueBlock>{value}</ValueBlock>
      </ContainerBlock>
    );
  };