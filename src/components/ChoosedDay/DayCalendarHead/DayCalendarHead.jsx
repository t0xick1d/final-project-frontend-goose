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

    // export default function  DayCalendarHead() {
    //   const navigate = useNavigate();
    //     const params = useParams();
    //     const date = new Date(params.currentDate);
    //     const ValidCurrentDate = (() => {
    //       if (Object.prototype.toString.call(date) === '[object Date]') {
    //         if (isNaN(date)) {
    //           return new Date();
    //         }
    //       }
    //       return date;
    //     })();

    //     const handleClick = date => {
    //       date = new Date(date);
    //       navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
    //     };

    //     const week = (() => {
    //       const startWeek = startOfWeek(ValidCurrentDate, { weekStartsOn: 1 });
    //       const endWeek = lastDayOfWeek(ValidCurrentDate, { weekStartsOn: 1 });
    //       const week = eachDayOfInterval({ start: startWeek, end: endWeek });
    //       return week;
    //     })();

    //   return (
    //     <Container>
    //     <WeekContainer>
    //     {week.map(dayWeek => (
    //       <DayWeek key={dayWeek}>
    //         <Media query="(min-width: 768px)">
    //           {matches => {
    //             return matches
    //               ? format(dayWeek, 'eee')
    //               : format(dayWeek, 'eeeee');
    //           }}
    //         </Media>
    //       </DayWeek>
    //     ))}
    // </WeekContainer>
    // <WeekContainer>
    // {week.map((dayWeek) => (
    //       <Day key={dayWeek} onClick={() => handleClick(dayWeek)}
    //       isToday={isToday(dayWeek, ValidCurrentDate )}>
    //           {format(dayWeek, 'd')}
    //       </Day>
    //     ))}
    // </WeekContainer>
    //   </Container>
  );
}
