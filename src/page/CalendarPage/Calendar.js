import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderCalendar from './HeaderCalendar/HeaderCalendar';
import { ChosedMonth } from 'components/ChosedMonth/ChosedMonth';

export default function CalendarPage() {
  
  return (
    <>
      {/* Suspense і outlet я додав ці компоненти мають відмальоувати chosemonth і choseday */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <HeaderCalendar/>
     <ChosedMonth/>
    </>
  );
}


