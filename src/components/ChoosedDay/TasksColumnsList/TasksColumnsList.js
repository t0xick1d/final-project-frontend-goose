import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { Section } from './TasksColumnsList.styled';

export const TasksColumnsList = () => {
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

  const tasks = useSelector(selectArrTasks).filter(
    task => task.date === formattedCurrentDate
  );

  const columnTitles = [
    { title: 'To do', category: 'todo' },
    { title: 'In progress', category: 'in-progress' },
    { title: 'Done', category: 'done' },
  ];

  const filteredTasks = tasks.filter(task => {
    return task.date === formattedCurrentDate;
  });

  // const columns =

  return (
    <Section>
      {columnTitles.map(({ title, category }) => (
        // TasksColumn

        <TasksColumn
          key={title}
          columnTitle={{ title, category }}
          tasks={filteredTasks.filter(task => task.category === category)}
        />
      ))}
      {/* {columns} */}
    </Section>
  );
};
