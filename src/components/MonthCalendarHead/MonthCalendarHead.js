import {
  eachDayOfInterval,
  format,
  isWeekend,
  lastDayOfWeek,
  startOfWeek,
} from 'date-fns';
import { useParams } from 'react-router-dom';
import Media from 'react-media';
import { Day, Week } from './MonthCalendarHead.styled';

const MonthCalendarHead = () => {
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

  const week = (() => {
    const startWeek = startOfWeek(ValidCurrentDate, { weekStartsOn: 1 });
    const endWeek = lastDayOfWeek(ValidCurrentDate, { weekStartsOn: 1 });
    const week = eachDayOfInterval({ start: startWeek, end: endWeek });
    return week;
  })();

  return (
    <Week>
      {week.map(dayWeek => (
        <Day key={dayWeek} isWeekend={isWeekend(dayWeek, ValidCurrentDate)}>
          <Media query="(min-width: 768px)">
            {matches => {
              return matches
                ? format(dayWeek, 'eee')
                : format(dayWeek, 'eeeee');
            }}
          </Media>
        </Day>
      ))}
    </Week>
  );
};

export default MonthCalendarHead;
