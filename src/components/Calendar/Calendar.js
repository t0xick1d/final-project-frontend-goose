import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CalendarWrapper } from './Calendar.styled';
import { format } from 'date-fns';

export default function Calendar({ onDateChange }) {
  const handleDateChange = date => {
    const formattedDate = format(date, 'dd MMMM yyyy');
    onDateChange(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarWrapper>
        <DateCalendar className="custom-calendar" onChange={handleDateChange} />
      </CalendarWrapper>
    </LocalizationProvider>
  );
}
