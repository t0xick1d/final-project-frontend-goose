import React,{ useEffect, useSelector, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTasks } from '../../../redux-store/tasks/tasksOperations'
//import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { SectionDay } from './ChoosedDay.styled';

export default function ChoosedDay() {
  const dispatch = useDispatch();
  const { currentDay } = useParams();
  //const tasks = useSelector(selectArrTasks);
     
  useEffect(() => {
    dispatch(fetchTasks(currentDay));
   }, [currentDay, dispatch]);


  const dayFromParams =
    currentDay === ':currentDay'
      ? new Date().toISOString().split('T')[0]
      : currentDay;

  const [choosedDay, setChoosedDay] = useState(dayFromParams);

  useEffect(() => {
    setChoosedDay(dayFromParams);
  }, [dayFromParams, choosedDay]);

  const chooseDay = ({ day, month, year }) => {
    setChoosedDay(`${year}-${month}-${day}`);
  };

  return (
    <SectionDay>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <ColumnHeadBar />
    </SectionDay>
  );
}
