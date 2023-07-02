import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTasksDay } from '../../redux-store/tasks/tasksOperations';
import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { SectionDay } from '../ChoosedDay/ChoosedDay/ChoosedDay.styled';
import { useSelector } from 'react-redux';
import TasksCard from '../ChoosedDay/Tasks/TasksCard/TasksCard';


export default function ChoosedDay() {
  const dispatch = useDispatch();
  const { currentDay } = useParams();
  const tasks = useSelector(selectArrTasks);

  const [filteredTasks, setFilteredTasks] = useState([]);

  
  useEffect(() => {
    dispatch(fetchTasksDay(currentDay));
  }, [currentDay, dispatch]);


  const [choosedDay, setChoosedDay] = useState(currentDay);

  useEffect(() => {
    setChoosedDay(currentDay);
  }, [currentDay, choosedDay]);

  const chooseDay = ({ day, month, year }) => {
    setChoosedDay(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    if (tasks) {
      const filtered = tasks.filter(task => task.date === currentDay);
      setFilteredTasks(filtered);
    }
  }, [currentDay, tasks]);

  return (
    <SectionDay>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <ColumnHeadBar />
       <TasksCard list={filteredTasks} />
    </SectionDay>
  );
}