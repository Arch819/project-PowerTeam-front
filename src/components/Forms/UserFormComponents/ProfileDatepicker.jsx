import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  IconSvg,
  TitleWrapper,
} from './PersonalInfoFields.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../../images/sprite.svg';

const ProfileDatepicker = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(value));
  const [status, setStatus] = useState(value ? true : false);
  const isAdult = new Date();
  isAdult.setFullYear(isAdult.getFullYear() - 18);

  const submitDate = date => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    setStatus(true);
    setSelectedDate(date);
    onChange(formattedDate);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper type="button" onClick={onClick} ref={ref}>
        {status ? format(selectedDate, 'dd.MM.yyyy') : '00.00.0000'}
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
        onChange={submitDate}
        customInput={<CustomInput />}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        maxDate={isAdult}
      />
      <CalendarGlobalStyles />
    </div>
  );
};

export default ProfileDatepicker;
