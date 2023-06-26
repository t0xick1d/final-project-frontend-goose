import React from 'react';
import { eachDayOfInterval, startOfWeek,endOfWeek, format} from 'date-fns'
import {DivWrapper, Days,Title, Container } from './TitleCalendar.styled'


export default function TitleCalendar() {
const daysOfWeek =   eachDayOfInterval({
  start: startOfWeek(new Date()),
  end: endOfWeek(new Date())
})


  return (  
  <Container>
<DivWrapper>
		<Days>
      <Title>
    {daysOfWeek.map((item) =>format(item, '	EEEEE'))}
    </Title>
    </Days>
		{/* <Days>
    {daysOfWeek.map((item) =>format(item, '	d'))}
    </Days> */}
	</DivWrapper>
  </Container>
  );
}
