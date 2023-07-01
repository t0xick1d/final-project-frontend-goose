import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  position: absolute;
  background-color: #3e85f3;
  color: #ffffff;
  border-radius: 8px;
  top: 66px;
  left: 14px;
  z-index: 2;

  .custom-calendar .MuiPickersDay-root {
    /* Стилі для днів місяця */
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  .custom-calendar .MuiTypography-caption {
    /* Стилі для назв днів тижня */
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  .custom-calendar .MuiPickersArrowSwitcher-root {
    /* Стилі для кнопок перемикачів */
    color: #ffffff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .custom-calendar .MuiSvgIcon-root path {
    /* Стилі для колірів іконок */
    fill: #ffffff;
  }

  .custom-calendar .MuiPickersDay-root.Mui-selected:hover {
    /* Стилі для круга поточної дати при наведенні курсору */
    background-color: #e0e0e0;
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    top: 174px;
    left: 64px;
  }

  @media screen and (min-width: 1440px) {
    top: 176px;
    left: 153px;
  }
`;
