import { useParams } from 'react-router';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import TasksCard from '../Tasks/TasksCard/TasksCard';
import { format } from 'date-fns';
import ButtonAddTask from '../Tasks/ButtonAddTask/ButtonAddTask';

import { Container, ScrollableContainer } from './TasksColumn.styled';

export const TasksColumn = ({ columnTitle, tasks }) => {
  const { title, category } = columnTitle;

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

  return (
    <>
      <Container id={category}>
        <ColumnHeadBar
          date={formattedCurrentDate}
          columnTitle={{ title, category }}
        />
        {/* {tasks && <ColumnsTasksList tasks={tasks} />} */}
        {tasks.length > 0 && (
          <ScrollableContainer>
            <TasksCard list={tasks} />
          </ScrollableContainer>
        )}
        {/* {tasks &&
          tasks.map(task => (
            // TasksColumn
            <div>
              {task.date} - {task.title}
            </div>
          ))} */}

        <ButtonAddTask date={formattedCurrentDate} category={category} />
      </Container>
    </>
  );
};
