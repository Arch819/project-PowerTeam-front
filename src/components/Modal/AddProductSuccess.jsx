// AddProductSuccess містить:
//  - повідомлення користувачеві про успішне додавання спожитого ним продукту за день
//  - кнопку Next product, по clickу на яку BasicModalWindow з AddProductSuccess має бути закрито
//  - посилання To the diary, по clickу на яке користувача має бути переадресовано на Diary page

import avocado from '../../images/ModalImg/avocado-2x.png';
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
  StyledLink,
} from '../Modal/AddProductSuccess.styled';

export const AddProductSuccess = ({ calories, closeModal }) => {
  return (
    <SuccessModalWindow>
      <SuccessModalWindowWrap>
        <SuccessModalWindowWrapImg>
          <SuccessModalWindowImg src={avocado} alt="avocado" />
          <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Calories:{calories}
            <SuccessModalWindowSpan>{calories}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <StyledLink to="/products" onClick={closeModal}>
          <SuccessModalWindowBtn>Next product</SuccessModalWindowBtn>
        </StyledLink>
        <StyledLink to="/diary" onClick={closeModal}>
          <SuccessModalWindowText>
            To the diary
            <ArrowIcon>
              <use href={`${sprite}#icon-next`}> </use>
            </ArrowIcon>
          </SuccessModalWindowText>
        </StyledLink>
      </SuccessModalWindowWrap>
    </SuccessModalWindow>
  );
};