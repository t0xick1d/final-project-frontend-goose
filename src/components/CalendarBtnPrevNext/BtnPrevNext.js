import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  BtnPrevNextContainer,
  BtnPrevContainer,
  BtnNextContainer,
  TextWrapper,
} from './BtnPrevNext.styled';

import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';

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

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        navigate(`/404`);
        return new Date();
      }
      return date;
    }
    navigate(`/404`);
    return new Date();
  })();

  function previousMonth() {
    const date = subMonths(ValidCurrentDate, 1);
    navigate(`/calendar/month/${format(date, 'yyyy-MM')}`);
  }

  function nextMonth() {
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
      {activeTab === 'day' && (
        <>
          <TextWrapper>{format(ValidCurrentDate, 'd MMMM yyyy')}</TextWrapper>
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
          <TextWrapper>{format(ValidCurrentDate, 'MMMM yyyy')}</TextWrapper>
          <BtnPrevContainer type="button" onClick={previousMonth}>
            <FaChevronLeft />
          </BtnPrevContainer>
          <BtnNextContainer type="button" onClick={nextMonth}>
            <FaChevronRight />

            {/* <FaChevronRight fill="#FFFFFF" /> */}
          </BtnNextContainer>
        </>
      )}
    </BtnPrevNextContainer>
  );
};

export default BtnPrevNext;
