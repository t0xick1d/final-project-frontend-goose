import ButtonAddTask from 'components/ChoosedDay/ButtonAddTask/ButtonAddTask';
import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TasksForm from 'components/TasksForm/TasksForm';
import { ToDoSection, Container, ContainerStatus, TextToDo, AddIcon } from './ColumnHeadBar.styled';

import { AddTaskButton } from './ColumnHeadBar.styled';
import Icons from 'images/sprite.svg';

export default function ColumnHeadBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }
  return (
      <ToDoSection>
          <Container>
      <ContainerStatus>
        <TextToDo>To do</TextToDo>
          <AddTaskButton  type="button"
        onClick={handleShowModal}
        aria-label="Add task">
            <AddIcon> <use href={`${Icons}#icon-plus-circle`}></use> </AddIcon></AddTaskButton>
              </ContainerStatus>
        <ButtonAddTask />  
         
      </Container>
  <Container>
      <ContainerStatus>
        <TextToDo>In progress</TextToDo>
          <AddTaskButton type="button"
        onClick={handleShowModal}
            aria-label="Add task">
            <AddIcon> <use href={`${Icons}#icon-plus-circle`}></use> </AddIcon>
            
          
          </AddTaskButton>
              </ContainerStatus>
              <ButtonAddTask />  
      </Container>
         <Container>
      <ContainerStatus>
        <TextToDo>Done</TextToDo>
              <AddTaskButton type="button"
        onClick={handleShowModal}
        aria-label="Add task"> <AddIcon> <use href={`${Icons}#icon-plus-circle`}></use> </AddIcon></AddTaskButton>
              </ContainerStatus>
              <ButtonAddTask />   
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
