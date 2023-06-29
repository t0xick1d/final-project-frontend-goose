import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  BtnPrevNextContainer,
  BtnPrevContainer,
  BtnNextContainer,
} from './BtnPrevNext.styled';

import {
  add,
  format,
  parse,
  startOfToday,
} from 'date-fns';


import {
  useState,
} from 'react';

const BtnPrevNext = () => {


  
  const today = startOfToday();
  
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

 
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  return (
    <BtnPrevNextContainer>
      <BtnPrevContainer 
      type="button"
      onClick={previousMonth}>
          <FaChevronLeft />
      </BtnPrevContainer>
      <BtnNextContainer 
      type="button"
      onClick={nextMonth}>
          <FaChevronRight />
      </BtnNextContainer>
    </BtnPrevNextContainer>
  );
};

export default BtnPrevNext;
