// import React, { useEffect, useMemo, useState } from 'react';
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
  eachDayOfInterval,
  format,
  lastDayOfWeek,
  startOfWeek,
} from 'date-fns';
import Media from 'react-media';

// const IndexOfCurrentDay = date => {
//   switch (date.toString().slice(0, 3).toUpperCase()) {
//     case 'MON':
//       return 0;
//     case 'TUE':
//       return 1;
//     case 'WED':
//       return 2;
//     case 'THU':
//       return 3;
//     case 'FRI':
//       return 4;
//     case 'SAT':
//       return 5;
//     case 'SUN':
//       return 6;
//     default:
//       return 0;
//   }
// };

// const dateParts = currentDay => {
//   if (currentDay && currentDay !== ':currentDay') {
//     return currentDay.split('-');
//   } else {
//     const currentDate = format(new Date(), 'yyyy-MM-dd');
//     return currentDate.split('-');
//   }
// };

export function DayCalendarHead({
  // clickChooseDay,
  currentDate,
}) {
  // const params = useParams();
  // const date = new Date(params.currentDate);

  // const ValidCurrentDate = (() => {
  //   if (Object.prototype.toString.call(date) === '[object Date]') {
  //     if (isNaN(date)) {
  //       return new Date();
  //     }
  //   }
  //   return date;
  // })();

  const week = (() => {
    const startWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
    const endWeek = lastDayOfWeek(currentDate, { weekStartsOn: 1 });
    const week = eachDayOfInterval({ start: startWeek, end: endWeek });
    return week;
  })();

  const navigate = useNavigate();
  // const { currentDay } = useParams();

  // const year = dateParts(currentDay)[0];
  // const month = dateParts(currentDay)[1] - 1;
  // const dayFromParams = dateParts(currentDay)[2];

  // const currentDate = new Date(year, month, dayFromParams);

  // const [choosedDay, setChoosedDay] = useState(dayFromParams);

  // const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  // const handleClickDay = (day, dayValue, monthValue, yearValue) => {
  const handleClickDay = dayWeek => {
    // const dateClickObject = {
    //   weekDay: day,
    //   day: dayValue,
    //   month: monthValue,
    //   year: yearValue,
    // };
    // setChoosedDay(dayValue);
    // clickChooseDay(dateClickObject);
    navigate(`/calendar/day/${format(dayWeek, 'yyyy-MM-dd')}`);
  };

  // useEffect(() => {
  //   setChoosedDay(dayFromParams);
  // }, [currentDay, dayFromParams]);

  // const weekInfoWrappers = useMemo(
  //   () =>
  //     daysOfWeek.map((day, index) => {
  //       const date = new Date(year, month, dayFromParams);

  //       const currentDay = index % 7;

  //       date.setDate(
  //         currentDate.getDate() + currentDay - IndexOfCurrentDay(date)
  //       );

  //       const dayOfWeek = date.toString().slice(0, 1).toUpperCase();
  //       const dayOfWeekLong = date.toString().slice(0, 3).toUpperCase();
  //       const dayValue = String(date.getDate()).padStart(2, '0');
  //       const monthValue = String(date.getMonth() + 1).padStart(2, '0');
  //       const yearValue = String(date.getFullYear());

  //       const dateKey = `${day}-${dayValue}-${monthValue}-${yearValue}`;

  //       const isCurrentDay = date.toDateString().slice(8, 10) === choosedDay;

  const isCurrentDay = dayWeek => {
    return format(dayWeek, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');
  };

  //       return (
  //         <WeekContainer key={dateKey}>
  //           <DayOfWeek key={dayOfWeek}>
  //             <Media query="(min-width: 768px)">
  //               {matches => {
  //                 return matches ? dayOfWeekLong : dayOfWeek;
  //               }}
  //             </Media>{' '}
  //           </DayOfWeek>
  //           <DateButton
  //             key={dateKey}
  //             onClick={() => {
  //               handleClickDay(day, dayValue, monthValue, yearValue);
  //               navigate(
  //                 `/calendar/day/${yearValue}-${monthValue}-${dayValue}`
  //               );
  //             }}
  //             style={{
  //               backgroundColor: isCurrentDay ? '#3e85f3' : 'inherit',
  //               color: isCurrentDay ? '#ffffff' : 'inherit',
  //             }}
  //           >
  //             <p>{dayValue}</p>
  //           </DateButton>
  //         </WeekContainer>
  //       );
  //     }),

  //   [daysOfWeek, currentDate, currentDay, IndexOfCurrentDay]
  // );

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
              <p>{format(dayWeek, 'd')}</p>
            </DateButton>
          </WeekContainer>
        ))}
      </DateContainer>
    </Container>
  );
}
