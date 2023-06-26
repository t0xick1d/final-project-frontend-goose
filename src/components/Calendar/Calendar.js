import React from 'react';import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar />
    </LocalizationProvider>
  );
}