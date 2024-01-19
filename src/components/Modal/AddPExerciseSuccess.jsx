// AddPExerciseSuccess містить:
//  - повідомлення користувачеві про успішне додавання виконаної ним вправи за день
//  - кнопку Next exercise по clickу на яку BasicModalWindow з AddExerciseSuccess має бути закрито
//  - посилання To the diary, по clickу на яке користувача має бути переадресовано на Diary page


import { Link } from 'react-router-dom';
import like from '../../images/like-2x.png';
import sprite from '../../images/sprite.svg';
import {
  ArrowIcon,
  SuccessModalWindow,
  SuccessModalWindowBtn,
  SuccessModalWindowImg,
  SuccessModalWindowSpan,
  SuccessModalWindowText,
  SuccessModalWindowTitle,
  SuccessModalWindowWrap,
  SuccessModalWindowWrapImg,
} from './SuccessExerciseModalWindow.styled';
export const SuccessExerciseModalWindow = ({ data, closeModal }) => {
  console.log(data);
  return (
    <SuccessModalWindow>
      <SuccessModalWindowWrap>
        <SuccessModalWindowWrapImg>
          <SuccessModalWindowImg src={like} alt="Like" />
          <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Time
            <SuccessModalWindowSpan>{data.time}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
          <SuccessModalWindowText>
            Burned calories
            <SuccessModalWindowSpan>
              {data.burnedCalories}
            </SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <Link to="/exercises" onClick={closeModal}>
          <SuccessModalWindowBtn>Next exercise</SuccessModalWindowBtn>
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