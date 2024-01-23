import { addDays, format, subDays } from 'date-fns';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../../images/sprite.svg';
import {
  CalendarContainer,
  CalendarGlobalStyles,
  CalendarWrapper,
  ChevronButton,
  IconChevron,
  IconSvg,
  TitleWrapper,
} from './DaySwitch.styled';

const DaySwitch = ({ onChangeDate, dateRegister }) => {
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
        <ChevronButton
          onClick={() => handleDateChange(subDays(selectedDate, 1))}
        >
          <IconChevron>
            <use href={`${sprite}#icon-calendar-left`}></use>
          </IconChevron>
        </ChevronButton>
        <ChevronButton
          onClick={() => handleDateChange(addDays(selectedDate, 1))}
        >
          <IconChevron>
            <use href={`${sprite}#icon-calendar-right`}></use>
          </IconChevron>
        </ChevronButton>
      </CalendarWrapper>
    );
  });

  return (
    <CalendarContainer>
      <DatePicker
        selected={selectedDate}
        changeMonth={true}
        changeYear={true}
        showMonthDropdown
        showYearDropdown
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        // minDate={dateRegister}
        maxDate={Date.now()}
        onChange={date => {
          setSelectedDate(date);
          onChangeDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
      />
      <CalendarGlobalStyles />
    </CalendarContainer>
  );
};

export default DaySwitch;
