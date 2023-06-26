import {
  format,
  startOfMonth,
  eachDayOfInterval,
  lastDayOfMonth,
  startOfWeek,
  lastDayOfWeek,
  // addMonths,
} from 'date-fns';

import { useParams } from 'react-router-dom';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from 'components/CalendarTable/CalendarTable';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'redux-store/tasks/tasks.operations';

export const ChosenMonth = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const date = new Date(params.currentDate);

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      }
    }
    return date;
  })();

  const firstDay = startOfMonth(ValidCurrentDate);
  const lastDay = lastDayOfMonth(ValidCurrentDate);
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });

  const from = format(startDate, 'yyyy-MM-dd');
  const to = format(endDate, 'yyyy-MM-dd');

  useEffect(() => {
    const data = { from, to };
    dispatch(get(data));
  }, [dispatch, from, to]);

  return (
    <>
      <MonthCalendarHead />
      <CalendarTable totalDays={totalDays} />
    </>
  );
};
