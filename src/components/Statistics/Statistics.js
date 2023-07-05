import {
  StatisticsContainer,
  ButtonWrapper,
  BtnContainer,
  OptionsContainer,
  IconSvg,
  List,
  Item,
  BtnPrevContainer,
  BtnPrevNextContainer,
  BtnNextContainer,
  StyledIconLeft,
  StyledIconRight,
} from './Statistics.styled';
import { format, parseISO, startOfToday, parse } from 'date-fns';
import Icons from '../../images/sprite.svg';
import { useState } from 'react';
import Calendar from 'components/Calendar/Calendar';
import Chart from './StatisticsChart';

const Statistics = () => {
  const today = startOfToday();
  const [firstDayCurrentMonth, setFirstDayCurrentMonth] = useState(
    parseISO(format(today, 'yyyy-MM-dd'))
  );
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = newDate => {
    const parsedDate = parse(newDate, 'dd MMMM yyyy', new Date());
    setFirstDayCurrentMonth(parsedDate);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(prevState => !prevState);
  };

  const handlePreviousDay = () => {
    const newDate = new Date(firstDayCurrentMonth);
    newDate.setDate(newDate.getDate() - 1);
    setFirstDayCurrentMonth(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(firstDayCurrentMonth);
    newDate.setDate(newDate.getDate() + 1);
    setFirstDayCurrentMonth(newDate);
  };

  return (
    <StatisticsContainer>
      <OptionsContainer>
        <BtnContainer>
          <ButtonWrapper type="button" onClick={toggleCalendar}>
            {format(firstDayCurrentMonth, 'dd MMMM yyyy')}
          </ButtonWrapper>
          <BtnPrevNextContainer>
            <BtnPrevContainer type="button" onClick={handlePreviousDay}>
              <StyledIconLeft fill="var(--calendar-date-color)" />
            </BtnPrevContainer>
            <BtnNextContainer type="button" onClick={handleNextDay}>
              <StyledIconRight fill="var(--calendar-date-color)" />
            </BtnNextContainer>
          </BtnPrevNextContainer>
        </BtnContainer>
        <List>
          <Item>
            <IconSvg>
              <use href={`${Icons}#icon-Ellipse-3-1`}></use>
            </IconSvg>
            By Day
          </Item>
          <Item>
            <IconSvg>
              <use href={`${Icons}#icon-Ellipse-4-1`}></use>
            </IconSvg>
            By Month
          </Item>
        </List>
      </OptionsContainer>
      <Chart
        firstDayCurrentMonth={firstDayCurrentMonth}
        setFirstDayCurrentMonth={setFirstDayCurrentMonth}
      />
      {showCalendar && <Calendar onDateChange={handleDateChange} />}
    </StatisticsContainer>
  );
};

export default Statistics;
