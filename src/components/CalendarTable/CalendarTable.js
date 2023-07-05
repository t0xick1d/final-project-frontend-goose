import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format, isSameMonth, isToday, getMonth, getDate } from 'date-fns';
import { Calendar, Cell, Day, Point, Task } from './CalendarTable.styled';
import { useParams } from 'react-router-dom';

export const CalendarTable = ({ totalDays }) => {
  const navigate = useNavigate();
  const taskList = useSelector(selectArrTasks);

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

  const handleClick = date => {
    date = new Date(date);
    const formattedDate = format(date, 'yyyy-MM-dd');
    navigate(`/calendar/day/${formattedDate}`);
  };

  return (
    <Calendar>
      {totalDays.map((date, index) => {
        const tasks = taskList.filter(task => {
          const taskDay = new Date(task.date).getDate();
          const taskMonth = new Date(task.date).getMonth();
          const currentDay = getDate(date);
          const currentMonth = getMonth(date);

          return currentDay === taskDay && currentMonth === taskMonth;
        });

        const countTasksLow = tasks.filter(
          ({ priority }) => priority === 'low'
        ).length;
        const countTasksMedium = tasks.filter(
          ({ priority }) => priority === 'medium'
        ).length;
        const countTasksHigh = tasks.filter(
          ({ priority }) => priority === 'high'
        ).length;
        const statTasks = { countTasksLow, countTasksMedium, countTasksHigh };

        return (
          <Cell key={index} onClick={() => handleClick(date)}>
            <Day
              params={{
                isToday: isToday(date, ValidCurrentDate),
                isSameMonth: !isSameMonth(date, ValidCurrentDate),
              }}
            >
              {format(date, 'd')}
            </Day>
            {tasks.length > 0 && (
              <ul>
                {tasks.length <= 3 && (
                  <>
                    {tasks.map(({ _id, title, priority }) => (
                      <Task key={_id} priority={priority}>
                        {title}
                      </Task>
                    ))}
                  </>
                )}

                {tasks.length > 3 && (
                  <>
                    <Task key="low" priority="low" group="true">
                      ...
                      <Point priority="low">{statTasks.countTasksLow}</Point>
                    </Task>
                    <Task key="medium" priority="medium" group="true">
                      ...
                      <Point priority="medium">
                        {statTasks.countTasksMedium}
                      </Point>
                    </Task>
                    <Task key="high" priority="high" group="true">
                      ...
                      <Point priority="high">{statTasks.countTasksHigh}</Point>
                    </Task>
                  </>
                )}
              </ul>
            )}
          </Cell>
        );
      })}
    </Calendar>
  );
};
