import React from 'react';
import {Container,DivWrapper, TextWrapper,} from './HeaderCalendar.styled'
import BtnPrevNex from 'components/CalendarBtnPrevNext/BtnPrevNext'
import PeriodType from 'components/CalendarPeriodSelect/PeriodTypeSelect'
import {
  format,
  parse,
  startOfToday,
} from 'date-fns';


import {
  useState,
} from 'react';

export default function HeaderCalendar(){
  const today = startOfToday();
  
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());


    return (
      <Container>
        <DivWrapper>
          <TextWrapper type="button">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </TextWrapper>
        <BtnPrevNex/>
        </DivWrapper>
        <PeriodType/>      
      </Container>
    );
};




