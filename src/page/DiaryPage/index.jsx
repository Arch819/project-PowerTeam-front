// Diary page "/diary"
// Складається з:
//  - компоненту TitlePage(опис компонента деталізовано у Profile page)
//  - компоненту DaySwitch, що дозволяє користувачу змінити дату, інформацію за яку він хоче переглянути
//  - компоненту DayProducts, що містить інформацію про перелік продуктів, спожитих користувачем за обрану ним дату
//  - компоненту DayExercises, що містить інформацію про перелік вправ, виконаних користувачем за обрану ним дату
//  - компоненту DayDashboard, що містить зведену інформацію за день по результатах спожитих користувачем продуктів та викона-
// них ним вправ

import Section from 'components/Section';
import TitlePage from 'components/TitlePage';
import DayDashboard from 'components/diary/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercisesTable/index.jsx';
import DayProductsTable from 'components/diary/DayProducts/DayProductsTable/index.jsx';
import DaySwitch from 'components/diary/DaySwitch';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDiaryByDateThunk } from 'store/diary/diaryThunk.js';
import {
  CalendarMainContainer,
  ItemsContainer,
  MainContentContainer,
} from './diaryPage.styled';

function DiaryPage() {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));

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
          <DaySwitch onChangeDate={handleChangeDate}></DaySwitch>
        </CalendarMainContainer>
        <MainContentContainer>
          <DayDashboard></DayDashboard>
          <ItemsContainer>
            <DayProductsTable></DayProductsTable>
            <DayExercises></DayExercises>
          </ItemsContainer>
        </MainContentContainer>
      </div>
    </Section>
  );
}

export default DiaryPage;
