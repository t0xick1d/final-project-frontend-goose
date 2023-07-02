import {  useParams, useNavigate } from 'react-router-dom';

import {
  eachDayOfInterval,
  format,
  lastDayOfWeek,
  startOfWeek,
  isToday,
} from 'date-fns';
import Media from 'react-media';
import { Day, DayWeek, Container, WeekContainer } from './DayCalendarHead.styled';

export default function  DayCalendarHead() {
  const navigate = useNavigate(); 
    const params = useParams();
    const date = new Date(params.currentDate);

  
    const ValidCurrentDate = (() => {
      if (Object.prototype.toString.call(date) === '[object Date]') {
        if (isNaN(date)) {
          return new Date();
        }
      }
      return date;
    })();
   
    const handleClick = date => {
      date = new Date(date);
      navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
    }; 

    const week = (() => {
      const startWeek = startOfWeek(ValidCurrentDate, { weekStartsOn: 1 });
      const endWeek = lastDayOfWeek(ValidCurrentDate, { weekStartsOn: 1 });
      const week = eachDayOfInterval({ start: startWeek, end: endWeek });
      return week;
    })();


  return (
    <Container>
    <WeekContainer>
    {week.map(dayWeek => (
      <DayWeek key={dayWeek}>
        <Media query="(min-width: 768px)">
          {matches => {
            return matches
              ? format(dayWeek, 'eee')
              : format(dayWeek, 'eeeee');
          }} 
        </Media>
      </DayWeek>
    ))}
</WeekContainer>
<WeekContainer>
{week.map((dayWeek) => (
      <Day key={dayWeek} onClick={() => handleClick(date)}
      isToday={isToday(dayWeek,ValidCurrentDate )}
      >
          {format(dayWeek, 'd')}   
      </Day>
    ))}
</WeekContainer>
  </Container>
  );
}