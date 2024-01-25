import { format } from 'date-fns';
import ExersiceModalWindowList from '../Modal/ExersiceModalWindowList';

import {
  ExersiceModalWindowWrap,
  ExersiceModalContainer,
  ExersiceModalImgWrapper,
  ExersiceModalWindowBtn,
  BoxBtn,
  ExersiceModalImg,
  ExersiceModalTimer,
  RightWrapper,
  LeftWrapper,
} from './AddExerciseForm.styled';

import Timer from '../Timer/Timer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { getAddExerciseThunk } from '../../store/diary/diaryThunk';

export const AddExerciseForm = ({ data, onClick, openSuccess }) => {
  const {
    bodyPart,
    equipment,
    burnedCalories,
    gifUrl,
    name,
    target,
    idExercise,
    time,
  } = data;

  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [dinamicTime, setDinamicTime] = useState(0);

  const dispatch = useDispatch();

  const amount = Math.round((burnedCalories / (time * 60)) * 180);

  const currentDate = new Date();
  const normalizedDate = format(currentDate, 'yyyy-MM-dd');

  const handleAddToDiary = () => {
    if (!amount) {
      Notiflix.Report.failure('Error', 'Must be greater than 0', 'OK');
      return;
    }

    dispatch(
      getAddExerciseThunk({
        time: dinamicTime,
        date: normalizedDate,
        exercise: idExercise,
        burnedCalories: dinamicBurnCal,
      })
    ).then(() => {
      openSuccess({ burnedCalories: dinamicBurnCal, time: dinamicTime });
      setDinamicTime(0);
      setDinamicBurnCal(0);
      onClick();
    });
  };
  return (
    <ExersiceModalContainer>
      <ExersiceModalWindowWrap>
        <LeftWrapper>
          <ExersiceModalImgWrapper>
            <ExersiceModalImg src={gifUrl} alt={name} />
          </ExersiceModalImgWrapper>
          <ExersiceModalTimer>
            <Timer
              data={data}
              setDinamicBurnCal={setDinamicBurnCal}
              dinamicBurnCal={dinamicBurnCal}
              setDinamicTime={setDinamicTime}
            />
          </ExersiceModalTimer>
        </LeftWrapper>
        <RightWrapper>
          <ExersiceModalWindowList
            name={name}
            bodypart={bodyPart}
            target={target}
            equipment={equipment}
            time={time}
          />
          <BoxBtn>
            <ExersiceModalWindowBtn
              type="button"
              onClick={handleAddToDiary}
              title={dinamicBurnCal > 0 ? '' : 'Do some exercise!'}
              $isDisabled={dinamicBurnCal >= 1}
            >
              Add to diary
            </ExersiceModalWindowBtn>
          </BoxBtn>
        </RightWrapper>
      </ExersiceModalWindowWrap>
    </ExersiceModalContainer>
  );
};
