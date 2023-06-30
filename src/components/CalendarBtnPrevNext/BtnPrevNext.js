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


const BtnPrevNext = ({onDateChange, viewType}) => {

  const today = startOfToday();

  const [currentMonth, setCurrentMonth] = useState(format(today, 'yyyy-MM'))
  const firstDayCurrentMonth = parse(currentMonth, 'yyyy-MM', new Date())

  const [currentDate, setCurrentDate] = useState(format(today, 'dd MMMM yyyy'));
  const currentDay = parse(currentDate, 'dd MMMM yyyy', new Date());
 
  function previousMonth() {
    if (viewType === 'day') {
      let previousDay = add(currentDay, { days: -1 });
      setCurrentDate(format(previousDay, 'dd MMMM yyyy'));
      onDateChange(format(previousDay, 'dd MMMM yyyy'));
    } else if (viewType === 'month') {
      const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
      setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM'))
      onDateChange(format(firstDayNextMonth, 'yyyy-MM'));
    }
  }

  function nextMonth() {
    if (viewType === 'day') {
      let nextDay = add(currentDay, { days: 1 });
      setCurrentDate(format(nextDay, 'dd MMMM yyyy'));
      onDateChange(format(nextDay, 'dd MMMM yyyy'));
    } else if (viewType === 'month') {
      const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM'));
    onDateChange(format(firstDayNextMonth, 'yyyy-MM'));
    }
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







// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import {
//   BtnPrevNextContainer,
//   BtnPrevContainer,
//   BtnNextContainer,
// } from './BtnPrevNext.styled';

// const BtnPrevNext = ({ previousMonth, nextMonth}) => {



  
//   return (
//     <BtnPrevNextContainer>
//       <BtnPrevContainer 
//       type="button"
//       onClick={previousMonth}>
//           <FaChevronLeft />
//       </BtnPrevContainer>
//       <BtnNextContainer 
//       type="button"
//       onClick={nextMonth}>
//           <FaChevronRight />
//       </BtnNextContainer>
//     </BtnPrevNextContainer>
//   );
// };

// export default BtnPrevNext;