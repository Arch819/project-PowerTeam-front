// Компонент відображає обрану користувачем дату у форматі dd/mm/YYYY.  По замовчуванню обрана дата дорівнює поточній даті.

// По clickу на поточну дату має відкриватись календар для зручного вибору дати користувачем.

// По clickу на іконку-"<" поточна дата має змінюватись на дату попереднього дня.
// По clickу на іконку-">" поточна дата має змінюватись на дату наступного дня.

// Дати, що передували даті реєстрації авторизованого користувача, мають бути недоступними для вибору.

import { forwardRef, useState } from 'react';
import { format, subDays, addDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  CalendarWrapper,
  IconSvg,
  TitleWrapper,
  IconChevron,
} from './DaySwitch.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../../images/sprite.svg';

const DaySwitch = ({ onChangeDate }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleDateChange = newDate => {
    setSelectedDate(newDate);
    onChangeDate(newDate);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <CalendarWrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(selectedDate, 'dd/MM/yyyy')}
          <IconSvg width="24" height="24">
            <use href={`${sprite}#icon-calendar`}></use>
          </IconSvg>
        </TitleWrapper>
        <IconChevron
          width="16"
          height="16"
          onClick={() => handleDateChange(subDays(selectedDate, 1))}
        >
          <use href={`${sprite}#icon-calendar-left`}></use>
        </IconChevron>
        <IconChevron
          width="16"
          height="16"
          onClick={() => handleDateChange(addDays(selectedDate, 1))}
        >
          <use href={`${sprite}#icon-calendar-right`}></use>
        </IconChevron>
      </CalendarWrapper>
    );
  });

  return (
    // style={{ position: 'relative' }}
    <>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          onChangeDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DaySwitch;
