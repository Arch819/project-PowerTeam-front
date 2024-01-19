// AddProductSuccess містить:
//  - повідомлення користувачеві про успішне додавання спожитого ним продукту за день
//  - кнопку Next product, по clickу на яку BasicModalWindow з AddProductSuccess має бути закрито
//  - посилання To the diary, по clickу на яке користувача має бути переадресовано на Diary page

import { Link } from 'react-router-dom';
import avocado from '../../images/avocado-2x.png';
import sprite from '../../images/sprite.svg';
import {
  SuccessModalWindow,
  SuccessModalWindowWrap,
  SuccessModalWindowWrapImg,
  SuccessModalWindowImg,
  SuccessModalWindowTitle,
  SuccessModalWindowText,
  SuccessModalWindowSpan,
  SuccessModalWindowBtn,
  ArrowIcon,
} from './AddProductSuccess.styles';

export const AddProductSuccess = ({ calories, closeModal }) => {
  return (
    <SuccessModalWindow>
      <SuccessModalWindowWrap>
        <SuccessModalWindowWrapImg>
          <SuccessModalWindowImg src={avocado} alt="avocado" />
          <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Calories:{' '}
            <SuccessModalWindowSpan>{calories}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <Link to="/products" onClick={closeModal}>
          <SuccessModalWindowBtn>Next product</SuccessModalWindowBtn>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <SuccessModalWindowText>
            To the diary
            <ArrowIcon>
              <use href={`${sprite}#icon-next`}> </use>
            </ArrowIcon>
          </SuccessModalWindowText>
        </Link>
      </SuccessModalWindowWrap>
    </SuccessModalWindow>
  );
};