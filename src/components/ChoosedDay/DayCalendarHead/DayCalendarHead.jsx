import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  WeekContainer,
  DayOfWeek,
  DateContainer,
  DateButton,
} from './DayCalendarHead.styled';
import {
  // import {  useParams, useNavigate } from 'react-router-dom';

  // import {

  eachDayOfInterval,
  format,
  lastDayOfWeek,
  startOfWeek,

  // isToday,
} from 'date-fns';
import Media from 'react-media';
// import {
//   // Day,
//   // DayWeek,
//   Container,
//   WeekContainer,
// } from './DayCalendarHead.styled';

////
export function DayCalendarHead({ currentDate }) {
  const week = (() => {
    const startWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
    const endWeek = lastDayOfWeek(currentDate, { weekStartsOn: 1 });
    const week = eachDayOfInterval({ start: startWeek, end: endWeek });
    return week;
  })();

  const navigate = useNavigate();

  const handleClickDay = dayWeek => {
    navigate(`/calendar/day/${format(dayWeek, 'yyyy-MM-dd')}`);
  };

  const isCurrentDay = dayWeek => {
    return format(dayWeek, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');
  };

  return (
    <Container>
      <DateContainer>
        {week.map((dayWeek, index) => (
          <WeekContainer key={index}>
            <DayOfWeek>
              <Media query="(min-width: 768px)">
                {matches => {
                  return matches
                    ? format(dayWeek, 'eee')
                    : format(dayWeek, 'eeeee');
                }}
              </Media>
            </DayOfWeek>
            <DateButton
              isCurrentDay={isCurrentDay(dayWeek)}
              onClick={() => {
                handleClickDay(dayWeek);
              }}
            >
              {format(dayWeek, 'd')}
            </DateButton>
          </WeekContainer>
        ))}
      </DateContainer>
    </Container>

    
  );
}
