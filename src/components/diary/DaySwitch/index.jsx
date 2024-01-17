// Компонент відображає обрану користувачем дату у форматі dd/mm/YYYY.  По замовчуванню обрана дата дорівнює поточній даті.

// По clickу на поточну дату має відкриватись календар для зручного вибору дати користувачем.

// По clickу на іконку-"<" поточна дата має змінюватись на дату попереднього дня.
// По clickу на іконку-">" поточна дата має змінюватись на дату наступного дня.

// Дати, що передували даті реєстрації авторизованого користувача, мають бути недоступними для вибору.

import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  IconSvg,
  TitleWrapper,
} from './DaySwitch.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../../images/sprite.svg';

const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <div style={{ position: 'relative' }}>
      <IconSvg width="18" height="18">
        <use href={`${sprite}#icon-calendar`}></use>
      </IconSvg>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </div>
  );
};

export default DaySwitch;