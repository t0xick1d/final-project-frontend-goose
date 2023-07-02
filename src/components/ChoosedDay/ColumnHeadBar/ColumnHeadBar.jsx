import ButtonAddTask from 'components/ChoosedDay/Tasks/ButtonAddTask/ButtonAddTask';
import React, { useEffect, useState } from 'react';
import Modal from 'components/Modal/Modal';
import TasksForm from 'components/ChoosedDay/Tasks/TasksForm/TasksForm';
import { ToDoSection, Container, ContainerStatus, TextToDo, AddIcon, ScrollableContainer } from './ColumnHeadBar.styled';

import { AddTaskButton } from './ColumnHeadBar.styled';
import Icons from 'images/sprite.svg';
import TasksCard from '../Tasks/TasksCard/TasksCard';
import { useSelector } from 'react-redux';
import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import { useParams } from 'react-router-dom';
import { fetchTasksDay } from 'redux-store/tasks/tasksOperations';
import { useDispatch } from 'react-redux';

export default function ColumnHeadBar() {
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState('');
    const tasksArr = useSelector(selectArrTasks)
    const { currentDate } = useParams()
    const dispatch = useDispatch()
    const todoTasks = [];
    const inProgressTasks = [];
    const doneTasks = [];

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleGetCategory = (e) => {
        setCategory(e.currentTarget.id)
    }

    const filteredByDate = tasksArr.filter(task => task.date === currentDate)

    filteredByDate && filteredByDate.reduce((_, task) => {
        if (task.category === 'todo') {
            todoTasks.push(task);
        } else if (task.category === 'in-progress') {
            inProgressTasks.push(task);
        } else if (task.category === 'done') {
            doneTasks.push(task);
        }
    }, null);

    useEffect(() => {
        dispatch(fetchTasksDay(currentDate && currentDate))
    }, [currentDate, dispatch])

    return (
        <ToDoSection>
            <Container onClick={handleGetCategory} id='todo'>
                <ContainerStatus>
                    <TextToDo>To do</TextToDo>
                    <AddTaskButton type="button"
                        onClick={handleShowModal}
                        aria-label="Add task">
                        <AddIcon> <use href={`${Icons}#icon-plus-circle`}></use> </AddIcon></AddTaskButton>
                </ContainerStatus>

                <ScrollableContainer>
                    <TasksCard list={todoTasks} />
                </ScrollableContainer>

                <ButtonAddTask category={category} />

            </Container>
            <Container onClick={handleGetCategory} id='in-progress'>
                <ContainerStatus>
                    <TextToDo>In progress</TextToDo>
                    <AddTaskButton type="button"
                        onClick={handleShowModal}
                        aria-label="Add task">
                        <AddIcon> <use href={`${Icons}#icon-plus-circle`}></use> </AddIcon>


                    </AddTaskButton>
                </ContainerStatus>

                <ScrollableContainer>
                    <TasksCard list={inProgressTasks} />
                </ScrollableContainer>


                <ButtonAddTask category={category} />
            </Container>
            <Container onClick={handleGetCategory} id='done'>
                <ContainerStatus>
                    <TextToDo>Done</TextToDo>
                    <AddTaskButton type="button"
                        onClick={handleShowModal}
                        aria-label="Add task"> <AddIcon> <use href={`${Icons}#icon-plus-circle`}></use> </AddIcon></AddTaskButton>
                </ContainerStatus>

                <ScrollableContainer >
                    <TasksCard list={doneTasks} />
                </ScrollableContainer>

                <ButtonAddTask category={category} />
            </Container>
            {showModal && (
                <Modal
                    open={showModal}
                    handleClose={handleCloseModal}
                    aria-label="Modal window is open"
                >
                    {' '}
                    <TasksForm onClose={handleCloseModal} />{' '}
                </Modal>
            )}

        </ToDoSection>
    );
}
