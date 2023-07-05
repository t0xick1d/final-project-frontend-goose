import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTasksDay } from '../../../redux-store/tasks/tasksOperations';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { SectionDay } from './ChoosedDay.styled';
import { format } from 'date-fns';
import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';

export default function ChoosedDay() {
  const dispatch = useDispatch();

  const params = useParams();
  const currentDay = new Date(params.currentDate);

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(currentDay) === '[object Date]') {
      if (isNaN(currentDay)) {
        return new Date();
      }
      return currentDay;
    }

    return new Date();
  })();

  const formattedCurrentDate = format(ValidCurrentDate, 'yyyy-MM-dd');

  useEffect(() => {
    const data = { date: formattedCurrentDate };
    dispatch(fetchTasksDay(data));
  }, [dispatch, formattedCurrentDate]);

  return (
    <SectionDay>
      <DayCalendarHead currentDate={ValidCurrentDate} />
      <TasksColumnsList />
    </SectionDay>
  );
}
