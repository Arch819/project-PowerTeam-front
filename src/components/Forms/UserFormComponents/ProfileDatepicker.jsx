import { forwardRef, useState } from 'react';
import { format, getYear, getMonth } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  IconSvg,
  TitleWrapper,
  SelectProfile,
  YearsMonthThumb,
} from './PersonalInfoFields.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../../images/sprite.svg';

const ProfileDatepicker = ({ value, onChange }) => {
  const isAdult = new Date();
  isAdult.setFullYear(isAdult.getFullYear() - 18);

  const yearsArray = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i += 1) {
      array.push(i);
    }
    return array;
  };

  const years = yearsArray(isAdult.getFullYear() - 40, isAdult.getFullYear());
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [selectedDate, setSelectedDate] = useState(
    value ? new Date(value) : isAdult
  );

  const [status, setStatus] = useState(value ? true : false);

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
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <YearsMonthThumb>
            <SelectProfile
              style={{ flexBasis: '70%' }}
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectProfile>

            <SelectProfile
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectProfile>
          </YearsMonthThumb>
        )}
      />
      <CalendarGlobalStyles />
    </div>
  );
};

export default ProfileDatepicker;
