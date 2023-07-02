import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  BtnPrevNextContainer,
  BtnPrevContainer,
  BtnNextContainer,
  TextWrapper,
} from './BtnPrevNext.styled';

import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';

// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom/dist';

const BtnPrevNext = () => {
  const [activeTab, setActiveTab] = useState('');

  const params = useParams();

  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    if (path.includes('/calendar/day/')) {
      setActiveTab('day');
    }
    if (path.includes('/calendar/month/')) {
      setActiveTab('month');
    }
  }, [path]);

  const date = new Date(params.currentDate);

  // const today = startOfToday();

  // const [currentMonth, setCurrentMonth] = useState(format(today, 'yyyy-MM'));
  // const firstDayCurrentMonth = parse(currentMonth, 'yyyy-MM', new Date());

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      }
    }
    return date;
  })();

  // const [currentDate, setCurrentDate] = useState(format(today, 'dd MMMM yyyy'));
  // const currentDay = parse(currentDate, 'dd MMMM yyyy', new Date());

  function previousMonth() {
    // if (viewType === 'day') {
    //   let previousDay = add(currentDay, { days: -1 });
    //   setCurrentDate(format(previousDay, 'dd MMMM yyyy'));
    //   onDateChange(format(previousDay, 'dd MMMM yyyy'));
    // } else if (viewType === 'month') {
    //   const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    //   setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM'));
    //   onDateChange(format(firstDayNextMonth, 'yyyy-MM'));
    // }
    const date = subMonths(ValidCurrentDate, 1);
    navigate(`/calendar/month/${format(date, 'yyyy-MM')}`);
  }

  function nextMonth() {
    // if (viewType === 'day') {
    //   let nextDay = add(currentDay, { days: 1 });
    //   setCurrentDate(format(nextDay, 'dd MMMM yyyy'));
    //   onDateChange(format(nextDay, 'dd MMMM yyyy'));
    // } else if (viewType === 'month') {
    //   const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    //   setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM'));
    //   onDateChange(format(firstDayNextMonth, 'yyyy-MM'));
    // }
    const date = addMonths(ValidCurrentDate, 1);
    navigate(`/calendar/month/${format(date, 'yyyy-MM')}`);
  }
  function previousDay() {
    const date = subDays(ValidCurrentDate, 1);

    navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
  }

  function nextDay() {
    const date = addDays(ValidCurrentDate, 1);
    navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
  }

  return (
    <BtnPrevNextContainer>
      {/* <BtnPrevContainer type="button" onClick={previousMonth}>
        <FaChevronLeft />
      </BtnPrevContainer>
      <BtnNextContainer type="button" onClick={nextMonth}>
        <FaChevronRight />
      </BtnNextContainer> */}
      {activeTab === 'day' && (
        <>
          <TextWrapper type="button">{format(date, 'd MMMM yyyy')}</TextWrapper>
          <BtnPrevContainer type="button" onClick={previousDay}>
            <FaChevronLeft />
          </BtnPrevContainer>
          <BtnNextContainer type="button" onClick={nextDay}>
            <FaChevronRight />
          </BtnNextContainer>
        </>
      )}
      {activeTab === 'month' && (
        <>
          <TextWrapper type="button">{format(date, 'MMMM yyyy')}</TextWrapper>
          <BtnPrevContainer type="button" onClick={previousMonth}>
            <FaChevronLeft />
          </BtnPrevContainer>
          <BtnNextContainer type="button" onClick={nextMonth}>
            <FaChevronRight />
          </BtnNextContainer>
        </>
      )}
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
