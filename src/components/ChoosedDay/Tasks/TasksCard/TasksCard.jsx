import React, { useEffect, useRef, useState } from 'react';
import {
  List,
  SvgBtn,
  Item,
  Wrapper,
  Box,
  Text,
  Avatar,
  Grade,
  DropdownBtn,
} from './TasksCard.styled';
import Icons from '../../../../images/sprite.svg';
import {
  deleteTask,
  editTask,
} from '../../../../redux-store/tasks/tasksOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux-store/Slices/AuthSlice';
import TasksForm from '../TasksForm/TasksForm';
import Modal from 'components/Modal/Modal';

import { createPortal } from 'react-dom';
import { TaskModal } from '../TaskModal/TaskModal';

export default function TasksCard({ task }) {
  const [isVisible, setIsVisible] = useState(false);
  const [positionModal, setPositionModal] = useState({});
  const [showModal, setShowModal] = useState(false);

  const Portal = ({ children }) => {
    return createPortal(children, document.body);
  };

  const modalRef = useRef(null);
  useEffect(() => {
    const x = modalRef.current.getBoundingClientRect().x;
    const y = modalRef.current.getBoundingClientRect().y;
    setPositionModal({ x, y });
  }, [isVisible]);

  const columnsTitles = [
    { title: 'To do', category: 'todo' },
    { title: 'In progress', category: 'in-progress' },
    { title: 'Done', category: 'done' },
  ];
  const otherColumns = columnsTitles.filter(({ category }) => {
    return category !== task.category;
  });

  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleClickMove = () => {
    setIsVisible(!isVisible);
  };

  const handleMoveCard = category => {
    const { title, start, end, priority, date } = task;
    dispatch(
      editTask({ _id: task._id, title, start, end, priority, date, category })
    );
    setIsVisible(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDDeleteTask = taskId => {
    if (window.confirm('Are you sure you want to delete the task?')) {
      dispatch(deleteTask(taskId));
    }
  };

  return (
    <>
      <Item key={task._id} ref={modalRef}>
        <Text>{`${task.title}`}</Text>
        <Wrapper>
          <Box>
            <Avatar src={`${user.user.avatarURL}`}></Avatar>
            <Grade color={`${task.priority}`}>{`${task.priority}`}</Grade>
          </Box>
          <List>
            <DropdownBtn
              id="dropdown-btn"
              onClick={() => {
                handleClickMove();
              }}
            >
              <SvgBtn>
                <use href={`${Icons}#icon-arrow`}></use>
              </SvgBtn>
            </DropdownBtn>

            <SvgBtn
              onClick={() => {
                handleShowModal();
              }}
            >
              <use href={`${Icons}#icon-pencil-grey`}></use>
            </SvgBtn>
            <SvgBtn
              onClick={() => {
                handleDDeleteTask(task._id);
              }}
            >
              <use href={`${Icons}#icon-trash`}></use>
            </SvgBtn>
          </List>
        </Wrapper>
      </Item>

      {showModal && (
        <Modal
          open={showModal}
          handleClose={handleCloseModal}
          aria-label="Modal window is open"
        >
          <TasksForm
            onClose={handleCloseModal}
            category={task.category}
            task={task}
          />
        </Modal>
      )}
      {isVisible && (
        <Portal>
          <TaskModal
            position={{
              left: positionModal.x,
              top: positionModal.y,
            }}
            onClose={handleMoveCard}
            onEdit={handleMoveCard}
            columns={otherColumns}
          />
        </Portal>
      )}
    </>
  );
}
