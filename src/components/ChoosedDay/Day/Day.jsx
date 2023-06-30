import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import React from 'react';
import TasksCard from '../Tasks/TasksCard/TasksCard';
import { SectionDay } from './Day.styled';
export default function Day() {
  return (
    <SectionDay>
      <ColumnHeadBar />
      <TasksCard />
    </SectionDay>
  );
}
