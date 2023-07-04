import React from 'react';

import { Container, DivWrapper } from './HeaderCalendar.styled';
import BtnPrevNex from 'components/CalendarBtnPrevNext/BtnPrevNext';
import PeriodType from 'components/CalendarPeriodSelect/PeriodTypeSelect';

export default function HeaderCalendar() {
  return (
    <Container>
      <DivWrapper>
        <BtnPrevNex />
      </DivWrapper>
      <PeriodType />
    </Container>
  );
}
