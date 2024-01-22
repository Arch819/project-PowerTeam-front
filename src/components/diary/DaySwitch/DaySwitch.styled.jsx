import { createGlobalStyle, styled } from 'styled-components';

export const CalendarContainer = styled.div`
  position: relative;
`;

export const IconSvg = styled.svg`
  stroke: var(--bg-l-icon);
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
    background-color: var(--bg-l-icon);
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
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: var(--bg-l-icon);    
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
    color: var(--bg-alert) ;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
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
    color: var( --color-text-white);
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
    border-color: var( --color-text-white);
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var( --color-text-white);
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: var(--bg-alert);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
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
    background-color: var(--bg-body) ;
    color: var(--color-text-primary);
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: var( --color-text-white);
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: var( --color-text-white);
    color: var(--color-text-secondaryV1);
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: var( --color-text-white);
    color: var(--color-text-secondaryV1);
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

export const TitleWrapper = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-right: 20px;
  background: transparent;
  border: none;

  color: var(--color-text-primary);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ChevronButton = styled.button`
  background: transparent;
  border: none;
`;

export const IconChevron = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text-pr30);
  fill: transparent;
  cursor: pointer;
  transition: stroke var(--transition);
  &:hover {
    stroke: var(--color-text-primary);
  }
`;
