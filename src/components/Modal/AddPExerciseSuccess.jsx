
import like from '../../images/ModalImg/like-2x.png';
import sprite from '../../images/sprite.svg';
import {
  ArrowIcon,
  StyledLink,
  SuccessModalWindow,
  SuccessModalWindowBtn,
  SuccessModalWindowImg,
  SuccessModalWindowSpan,
  SuccessModalWindowText,
  SuccessModalWindowTitle,
  SuccessModalWindowWrap,
  SuccessModalWindowWrapImg,
} from '../Modal/AddPExerciseSuccess.styled';

export const SuccessExerciseModalWindow = ({ data, closeModal }) => {
  return (
    <SuccessModalWindow>
      <SuccessModalWindowWrap>
        <SuccessModalWindowWrapImg>
          <SuccessModalWindowImg src={like} alt="Like" />
          <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Your time:
            <SuccessModalWindowSpan>{data.time}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
          <SuccessModalWindowText>
            Burned calories:
            <SuccessModalWindowSpan>
              {data.burnedCalories}
            </SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <StyledLink to="/exercises" onClick={closeModal}>
          <SuccessModalWindowBtn>Next exercise</SuccessModalWindowBtn>
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