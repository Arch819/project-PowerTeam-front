import React from 'react';
import sprite from '../../images/sprite.svg';
import {
  TextMess,
  WrapperIcon,
  Wrapper,
} from './WarningMessage.styled';

const WarningMessage = () => {
  return (
    <Wrapper>
      <WrapperIcon>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-exclamation-mark`}></use>
        </svg>
      </WrapperIcon>
      <TextMess>
        We understand that each individual is unique, so the entire approach to
        diet is relative and tailored to your unique body and goals.
      </TextMess>
    </Wrapper>
  );
};

export default WarningMessage;
