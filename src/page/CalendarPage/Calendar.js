import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import HeaderCalendar from './HeaderCalendar/HeaderCalendar';
// import { ChosedMonth } from 'components/ChosedMonth/ChosedMonth';
import { format } from 'date-fns';

export default function CalendarPage() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const date = new Date(params.currentDate);

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      }
    }
    return date;
  })();

  const formattedCurrentDate = format(ValidCurrentDate, 'yyyy-MM');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
      return;
    }
  }, [formattedCurrentDate, location.pathname, navigate]);

  return (
    <>
      {/* Suspense і outlet я додав ці компоненти мають відмальоувати chosemonth і choseday */}

      <Suspense fallback={<div>Loading page...</div>}>
        <HeaderCalendar />
        <Outlet />
      </Suspense>

      {/* <ChosedMonth /> */}
    </>
  );
}
