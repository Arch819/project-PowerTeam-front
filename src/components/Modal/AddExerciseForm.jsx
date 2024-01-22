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
} from './AddExerciseForm.styled';

import Timer from '../Timer/Timer';
import { useDispatch } from 'react-redux';
import {useState } from 'react';
import Notiflix from 'notiflix';
import { getAddExerciseThunk } from '../../store/diary/diaryThunk';

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

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
console.log(data)
  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [dinamicTime, setDinamicTime] = useState(0);

  const dispatch = useDispatch();

  const amount = Math.round((burnedCalories / (time * 60)) * 180);

  const savedDate = localStorage.getItem('selectedDate');
  let date = new Date(); // Default to current date

  if (savedDate) {
    const parsedDate = new Date(savedDate);
    if (!isNaN(parsedDate.getTime())) {
      date = parsedDate; // Use parsed date if valid
    }
  }

  // const formattedDate = formatDate(date);

  const currentDate = new Date();
  const normalizedDate = (format(currentDate, 'yyyy-MM-dd'))

  const handleAddToDiary = () => {
    if (!amount) {
      Notiflix.Report.failure('Error', 'Must be greater than 0', 'OK');
      return;
    };

    dispatch(
      getAddExerciseThunk({ time:dinamicTime, date: normalizedDate, exercise: idExercise, burnedCalories: dinamicBurnCal }),
    ).then(() => {
    openSuccess({burnedCalories: dinamicBurnCal, time: dinamicTime})
     onClick();
    })
  };

  return (
    <ExersiceModalContainer>
      <ExersiceModalWindowWrap>
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
        <ExersiceModalWindowList
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
          time={time}
        />
        <BoxBtn>
          <ExersiceModalWindowBtn type="button" onClick={handleAddToDiary}>
            Add to diary
          </ExersiceModalWindowBtn>
        </BoxBtn>
      </ExersiceModalWindowWrap>
    </ExersiceModalContainer>
  );
};
