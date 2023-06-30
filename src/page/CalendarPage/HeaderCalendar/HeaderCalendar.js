import React from 'react';
import { useNavigate, 
  // useParams
} from 'react-router-dom';
import {Container,DivWrapper, TextWrapper,} from './HeaderCalendar.styled'
import BtnPrevNex from 'components/CalendarBtnPrevNext/BtnPrevNext'
import PeriodType from 'components/CalendarPeriodSelect/PeriodTypeSelect'



import {
  format,
  parse,
  startOfToday,
  // eachDayOfInterval,
  // startOfWeek,
  // endOfWeek,
} from 'date-fns';

import {
  useState,
} from 'react';


export default function HeaderCalendar(){
  const  today = startOfToday();
  const navigate = useNavigate();

  // const { currentDate } = useParams();

  const [currentMonth, setCurrentMonth] = useState(format(today, 'yyyy-MM'));
  const firstDayCurrentMonth = parse(currentMonth, 'yyyy-MM', new Date())

  // const [currentDates, setCurrentDates] = useState(format(today, 'yyyy-MM-dd'));
  // const currentDay = parse(currentDates, 'yyyy-MM-dd', new Date());
 

  // const resultWeek = eachDayOfInterval({
  //   start: startOfWeek(currentDay),
  //   end: endOfWeek(currentDay)
  // })


  // const handleDayChange = date =>{
  //   date = new Date(date);
  //   const formattedDate = format(date, 'yyyy-MM-dd');
  //   setCurrentDates(format(date, 'yyyy-MM-dd'))
  //   navigate(`/calendar/day/${formattedDate}`);
  // }


  const handleMonthChange = date => {
    date = new Date(date);
    const formattedDate = format(date, 'yyyy-MM-dd');
    setCurrentMonth(format(date, 'yyyy-MM'))
    navigate(`/calendar/month/${formattedDate}`);
  }

    return (
      <Container>
        <DivWrapper>
          <TextWrapper 
          type="button">
            {/* {format(currentDay, 'd MMM yyyy')} */}
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </TextWrapper>

            <BtnPrevNex 
          //  onDateChange={handleDayChange} 
           onDateChange={handleMonthChange}
           viewType='month'
           />
           
        </DivWrapper>
        <PeriodType/>      
      </Container>
    );
};




