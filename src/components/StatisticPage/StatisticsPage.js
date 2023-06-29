import React from 'react';
import { MainContainer, CalendarBox } from './StatisticsPageStyled';

export default function StatisticsPage() {
  
  return (
    <>
      <MainContainer>
        <CalendarBox>
          Calendar
          <p>By Day</p>
          <p>By Month</p>
        </CalendarBox>
        <div>
          <p>Tasks</p>
        </div>
      </MainContainer>
    </>
  );
}
