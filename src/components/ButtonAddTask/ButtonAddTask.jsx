import React from 'react';
import { AddTaskButton, AddTaskIcon } from './ButtonAddTask.styled';
import AddTask from '../../images/icons/plus.svg'

export default function ButtonAddTask() {
    return (
        <AddTaskButton>
        <AddTaskIcon src={AddTask} alt="addTask" />
        Add task</AddTaskButton>
    );
}
