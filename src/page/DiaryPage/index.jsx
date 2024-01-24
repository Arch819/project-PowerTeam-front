import Section from 'components/Section';
import TitlePage from 'components/TitlePage';
import DayDashboard from 'components/diary/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercisesTable';
import DayProducts from 'components/diary/DayProducts/DayProductsTable';
import DaySwitch from 'components/diary/DaySwitch';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiaryByDateThunk } from 'store/diary/diaryThunk.js';
import {
  CalendarMainContainer,
  ItemsContainer,
  MainContentContainer,
} from './diaryPage.styled';
import { selectUser } from 'store/auth/selector';
import { parseISO } from 'date-fns';

function DiaryPage() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const registerDate = parseISO(userData.createdAt);

  const handleChangeDate = date => {
    const newDate = date.toISOString();
    setStartDate(newDate);
  };

  useEffect(() => {
    dispatch(getDiaryByDateThunk(startDate));
  }, [dispatch, startDate]);

  return (
    <Section>
      <div className="container">
        <CalendarMainContainer>
          <TitlePage title={'Diary'}></TitlePage>
          <DaySwitch
            onChangeDate={handleChangeDate}
            dateRegister={registerDate}
          ></DaySwitch>
        </CalendarMainContainer>
        <MainContentContainer>
          <DayDashboard></DayDashboard>
          <ItemsContainer>
            <DayProducts></DayProducts>
            <DayExercises></DayExercises>
          </ItemsContainer>
        </MainContentContainer>
      </div>
    </Section>
  );
}

export default DiaryPage;
