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
      return currentDay;
    }
    return new Date();
  })();

  const formattedCurrentDate = format(ValidCurrentDate, 'yyyy-MM-dd');

  return (
    <>
      <Container id={category}>
        <ColumnHeadBar
          date={formattedCurrentDate}
          columnTitle={{ title, category }}
        />

        {tasks.length > 0 && (
          <ScrollableContainer>
            {tasks.map(task => (
              <TasksCard key={task._id} task={task} />
            ))}
          </ScrollableContainer>
        )}

        <ButtonAddTask date={formattedCurrentDate} category={category} />
      </Container>
    </>
  );
};
