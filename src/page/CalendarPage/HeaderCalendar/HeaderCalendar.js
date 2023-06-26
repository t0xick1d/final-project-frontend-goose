import React from 'react';
import {Container,DivWrapper, TextWrapper, ButtonsWrapper, ButtonWrapper} from './HeaderCalendar.styled'
import { format 
  // formatDistance,
  //  formatRelative, 
  //  subDays 
  } from 'date-fns'
export default function HeaderCalendar({firstDayCurrentMonth,previousMonth,nextMonth})
{
   

    return (
      <Container>
        <DivWrapper>
          <TextWrapper type="button">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </TextWrapper>

          <ButtonsWrapper>
            <ButtonWrapper type="button" onClick={previousMonth}>
              {' '}
              &lt;{' '}
            </ButtonWrapper>

            <ButtonWrapper onClick={nextMonth} type="button">
              {' '}
              &gt;
            </ButtonWrapper>
          </ButtonsWrapper>
        </DivWrapper>
        <button>кнопка</button>
      </Container>
    );
};




