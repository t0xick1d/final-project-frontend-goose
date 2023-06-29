import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import React from 'react';
import { SectionDay } from './Day.styled';
import TaskEditForm from 'components/TaskEditForm/TaskEditForm';

export default function Day() {
  return (
    <SectionDay>
      <ColumnHeadBar />
      <TaskEditForm />
    </SectionDay>
  );
}
