import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { AddTaskButton, AddTaskIcon } from './ButtonAddTask.styled';
import Icons from 'images/sprite.svg';
import TasksForm from 'components/ChoosedDay/Tasks/TasksForm/TasksForm';

export default function ButtonAddTask({ category }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.getElementById('addTaskButton').focus();
  };
  return (
    <>
      <AddTaskButton
        type="button"
        onClick={handleShowModal}
        aria-label="Add task"
        id="addTaskButton"
      >
        <AddTaskIcon>
          <use href={`${Icons}#icon-plus-black`}></use>
        </AddTaskIcon>
        Add task
      </AddTaskButton>
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
