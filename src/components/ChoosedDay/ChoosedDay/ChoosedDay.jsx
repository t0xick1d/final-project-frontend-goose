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
    }
    return currentDay;
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

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
// import DayCalendarHead from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
// import { SectionDay } from './ChoosedDay.styled';

// export default function ChoosedDay() {
//   const { currentDate } = useParams();

//   const [choosedDay, setChoosedDay] = useState(currentDate);

//   useEffect(() => {
//     setChoosedDay(currentDate);
//   }, [currentDate, choosedDay]);

//   const chooseDay = ({ day, month, year }) => {
//     setChoosedDay(`${year}-${month}-${day}`);
//   };

//   return (
//     <SectionDay>
//       <DayCalendarHead clickChooseDay={chooseDay} />
//       <ColumnHeadBar />
//     </SectionDay>
//   );
// }
