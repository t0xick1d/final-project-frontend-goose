import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CalendarWrapper } from './Calendar.styled';

export default function Calendar() {


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarWrapper>
        <DateCalendar className="custom-calendar" />
      </CalendarWrapper>
    </LocalizationProvider>
  );
}

