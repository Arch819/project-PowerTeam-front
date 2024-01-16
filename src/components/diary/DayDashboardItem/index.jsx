import React from 'react';
import sprite from '../../../images/sprite.svg';
import { Icon, Item, Text, Title, TitleBox } from './DayDashboardItem.styled';

function DayDashboardItem({ color, icon, data, title }) {
  return (
    <Item className={color}>
      <TitleBox>
        <Icon>
          <use href={`${sprite}#${icon}`} />
        </Icon>
        <Title>{title}</Title>
      </TitleBox>
      <Text>{data}</Text>
    </Item>
  );
}

export default DayDashboardItem;
