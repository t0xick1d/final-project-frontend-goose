import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  BtnPrevNextContainer,
  BtnPrevContainer,
  BtnNextContainer,
} from './BtnPrevNext.styled';

import { add, format, parse, startOfToday } from 'date-fns';

import { useState } from 'react';

const BtnPrevNext = ({ onDateChange, viewType }) => {
  const today = startOfToday();

  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const [currentDate, setCurrentDate] = useState(format(today, 'dd MMMM yyyy'));
  const currentDay = parse(currentDate, 'dd MMMM yyyy', new Date());

  function previousMonth() {
    if (viewType === 'day') {
      let previousDay = add(currentDay, { days: -1 });
      setCurrentDate(format(previousDay, 'dd MMMM yyyy'));
      onDateChange(format(previousDay, 'dd MMMM yyyy'));
    } else if (viewType === 'month') {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }
  }

  function nextMonth() {
    if (viewType === 'day') {
      let nextDay = add(currentDay, { days: 1 });
      setCurrentDate(format(nextDay, 'dd MMMM yyyy'));
      onDateChange(format(nextDay, 'dd MMMM yyyy'));
    } else if (viewType === 'month') {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }
  }

  return (
    <BtnPrevNextContainer>
      <BtnPrevContainer type="button" onClick={previousMonth}>
        <FaChevronLeft />
      </BtnPrevContainer>
      <BtnNextContainer type="button" onClick={nextMonth}>
        <FaChevronRight />
      </BtnNextContainer>
    </BtnPrevNextContainer>
  );
};

export default BtnPrevNext;
