import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  DayWrapper,
} from '../CalendarPage/CalendarGrid/CalendarGrid.styled';
import TitleCalendar from './TitleCalendar/TitleCalendar';
import HeaderCalendar from './HeaderCalendar/HeaderCalendar';
// import CalendarGrid from './CalendarGrid/CalendarGrid'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  // isSameDay,
  isSameMonth,
  isToday,
  parse,
  // parseISO,
  startOfToday,
} from 'date-fns';

import {
  //  Fragment,
  useState,
} from 'react';
//import { ChosedMonth } from 'components/ChosedMonth/ChosedMonth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CalendarPage() {
  const today = startOfToday();
  const [selectedDay] = useState(today);
  // setSelectedDay
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  return (
    <>
      {/* Suspense і outlet я додав ці компоненти мають відмальоувати chosemonth і choseday */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <HeaderCalendar
        firstDayCurrentMonth={firstDayCurrentMonth}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />

      <TitleCalendar />

      <GridWrapper>
        {days.map((day, dayIdx) => (
          <CellWrapper
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              'py-1.5'
            )}
          >
            <RowInCell justifyContent={'flex-end'}>
              <DayWrapper
                type="button"
                onClick={() => day}
                className={classNames(
                  isEqual(day, selectedDay) && 'text-white',
                  !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-900',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-400',
                  isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                  isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                  !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    'font-semibold',
                  'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                )}
              >
                {format(day, 'd')}
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];