import { createGlobalStyle, styled } from 'styled-components';

export const IconSvg = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  stroke: var(--border-color-link-hover);
`;

export const CalendarGlobalStyles = createGlobalStyle`
 .react-datepicker__wrapper {
    position: relative;
    
  }
  .react-datepicker {
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translate(-15%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: var(--bg-btn-sec);
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;

  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: var(--border-20);
  }
  .react-datepicker__header {
    position: relative;
    background-color: var(--bg-btn-sec);    
  }

  .react-datepicker-wrapper{
    width: 100%;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: var(--color-text-primary);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: var(--color-text-pr50);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: var(--color-text-primary);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
   
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: var(--bg-body);
    color: var(--color-text-primary);
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: var(--color-text-primary);
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: var(--color-text-primary);
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

export const TitleWrapper = styled.button`
  border-radius: 12px;
  background-color: transparent;
  border: var(--border-30);
  width: 100%;
  color: var(--color-text-primary);
  text-align: start;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
  padding: 14px;
`;

export const SelectProfile = styled.select`
  background-color: var(--bg-btn-sec);
  border: none;
  width: 100%;
  color: var(--color-text-primary);
  text-align: start;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
  padding: 2px;
`;
export const YearsMonthThumb = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
