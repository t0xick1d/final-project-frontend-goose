// import React from 'react';
// import { startOfWeek, eachDayOfInterval } from 'date-fns';

// export default function DayCalendarHead({chosenDate}) {
//     const weekStart = startOfWeek(chosenDate, { weekStartsOn: 1 }); // Assuming Monday is the start of the week
//     const weekDays = eachDayOfInterval({ start: weekStart, end: chosenDate });

//     return (
//         <div>
//             <ul>
//                 {weekDays.map((day) => (
//                     <li key={day.toISOString()}>{day.toDateString()}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// };