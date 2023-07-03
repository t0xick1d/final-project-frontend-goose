import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import DayCalendarHead from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { SectionDay } from './ChoosedDay.styled';

export default function ChoosedDay() {
  const { currentDate } = useParams();

  const [choosedDay, setChoosedDay] = useState(currentDate);

  useEffect(() => {
    setChoosedDay(currentDate);
  }, [currentDate, choosedDay]);

  const chooseDay = ({ day, month, year }) => {
    setChoosedDay(`${year}-${month}-${day}`);
  };

  return (
    <SectionDay>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <ColumnHeadBar />
    </SectionDay>
  );
}


