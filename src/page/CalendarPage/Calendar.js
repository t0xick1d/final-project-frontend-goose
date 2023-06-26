import React from 'react';
import { ChosenMonth } from 'components/ChosonMonth/ChosonMonth';

export default function CalendarPage() {
  return (
    <div style={{ backgroundColor: '#ededed', margin: '20px' }}>
      CalendarPage
      <ChosenMonth />
    </div>
  );
}
