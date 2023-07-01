import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTasksDay } from '../../../redux-store/tasks/tasksOperations';
import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { SectionDay } from './ChoosedDay.styled';
import { useSelector } from 'react-redux';

const categoryTask = {
  done: [],
  inProgress: [],
  toDo: [],
};

export default function ChoosedDay() {
  const dispatch = useDispatch();
  const { currentDay } = useParams();
  const tasks = useSelector(selectArrTasks);

  useEffect(() => {
    dispatch(fetchTasksDay(currentDay));
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

  const [, setSortTasks] = useState(categoryTask);

  function sortByStartTime(array) {
    return array.sort((a, b) => b.start.localeCompare(a.start));
  }

  function filterByDate(array, currentDay) {
    return array.filter(item => item.date === currentDay);
  }
  useEffect(() => {
    //sort by category
    function getCategory(data, targetDate) {
      const filterData = filterByDate(data, targetDate);

      const done = [];
      const inProgress = [];
      const toDo = [];

      for (const item of filterData) {
        if (item.category === 'done') {
          done.push(item);
        } else if (item.category === 'in-progress') {
          inProgress.push(item);
        } else if (item.category === 'to-do') {
          toDo.push(item);
        }
      }

      return {
        done: sortByStartTime(done),
        inProgress: sortByStartTime(inProgress),
        toDo: sortByStartTime(toDo),
      };
    }

    if (tasks) {
      const category = getCategory(tasks, currentDay);
      setSortTasks(category);
    }
  }, [currentDay, tasks]);

  return (
    <SectionDay>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <ColumnHeadBar />
      {/* {sortTasks && <TasksList sortTasksData={sortTasks} />} */}
    </SectionDay>
  );
}
