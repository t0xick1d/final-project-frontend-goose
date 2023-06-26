// import React from 'react';
// import {
//   GridWrapper,
//   CellWrapper,
//   RowInCell,
//   DayWrapper,
// } from './CalendarGrid.styled';
// import { format } from 'date-fns';

// export default function CalendarGrid({ today, newDays }) {
//   return (
//     <>
//       <GridWrapper>
//         {newDays.map(dayItem => (
//           <CellWrapper key={dayItem.format('DDMMYYYY')}>
//             <RowInCell justifyContent={'flex-end'}>
//               <DayWrapper>
//                 {/* {format(new Date(dayItem), 'MMMM')} */}
//               </DayWrapper>
//             </RowInCell>
//           </CellWrapper>
//         ))}
//       </GridWrapper>
//     </>
//   );
// }
