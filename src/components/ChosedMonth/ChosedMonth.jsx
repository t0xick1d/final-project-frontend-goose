import {
  startOfMonth,
  eachDayOfInterval,
  lastDayOfMonth,
  startOfWeek,
  lastDayOfWeek,
  format,
} from 'date-fns';
import { useParams } from 'react-router-dom';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from 'components/CalendarTable/CalendarTable';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasksMonth } from 'redux-store/tasks/tasksOperations';

export const ChosedMonth = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const date = new Date(params.currentDate);

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      }
      return date;
    }
    return new Date();
  })();

  const firstDay = startOfMonth(ValidCurrentDate);
  const lastDay = lastDayOfMonth(ValidCurrentDate);
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });

  const formattedDate = format(ValidCurrentDate, 'yyyy-MM');
  useEffect(() => {
    dispatch(fetchTasksMonth(formattedDate));
  }, [dispatch, formattedDate]);

  return (
    <>
      <MonthCalendarHead />
      <CalendarTable totalDays={totalDays} />
    </>
  );
};
