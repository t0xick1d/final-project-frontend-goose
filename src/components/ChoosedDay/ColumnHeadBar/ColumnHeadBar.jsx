import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TasksForm from 'components/ChoosedDay/Tasks/TasksForm/TasksForm';
import { ContainerStatus, TextToDo, AddIcon } from './ColumnHeadBar.styled';

import { AddTaskButton } from './ColumnHeadBar.styled';
import Icons from 'images/sprite.svg';

export default function ColumnHeadBar({ columnTitle }) {
  const { title, category } = columnTitle;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ContainerStatus>
        <TextToDo>{title}</TextToDo>
        <AddTaskButton
          type="button"
          onClick={handleShowModal}
          aria-label="Add task"
        >
          <AddIcon>
            <use href={`${Icons}#icon-plus-circle`}></use>
          </AddIcon>
        </AddTaskButton>
      </ContainerStatus>

      {showModal && (
        <Modal
          open={showModal}
          handleClose={handleCloseModal}
          aria-label="Modal window is open"
        >
          <TasksForm onClose={handleCloseModal} category={category} />
        </Modal>
      )}
    </>
  );
}
