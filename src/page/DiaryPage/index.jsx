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
  CalendarContainer,
  ItemsContainer,
  MainContentContainer,
} from './diaryPage.styled';

function DiaryPage() {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  console.log(startDate, 'diary');
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
        {/* заголовок помістити в компонетнт тайтл пейдж */}
        <CalendarContainer>
          <h2>Diary</h2>
          <TitlePage></TitlePage>
          <DaySwitch onChangeDate={handleChangeDate}></DaySwitch>
        </CalendarContainer>
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
