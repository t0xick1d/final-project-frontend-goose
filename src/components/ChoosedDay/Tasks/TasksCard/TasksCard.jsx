import React, { useState } from 'react';
import {
  List,
  SvgBtn,
  MainList,
  Item,
  Wrapper,
  Box,
  Text,
  Avatar,
  Grade,
  Dropdown,
  DropdownElement,
  DropdownText,
  DropdownBtn,
} from './TasksCard.styled';
import Icons from '../../../../images/sprite.svg';
import {
  editTask,
  deleteTask,
} from '../../../../redux-store/tasks/tasksOperations';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { getUser } from 'redux-store/Slices/AuthSlice';

// const TaskMessage = "Task Message"; // тут треба текст
// const Avatar =  // а тут аватарка
// const TaskGrade = dsd; // а тут рівень(типу низький, середній або високий)

// це варіант, якщо меню не вилазить
// var dropdownBtn = document.querySelector('#dropdown-btn');
// var dropdown = document.querySelector('#dropdown');

// dropdownBtn.addEventListener('click', function () {
//     dropdown.classList.toggle('hidden');
// });

// window.addEventListener('click', function (event) {
//     if (!event.target.matches(dropdown)) {
//         if (dropdown.classList.contains('hidden') = false) {
//             dropdown.classList.add('hidden');
//         }
//     }
// });

// function checkStatus() {
//     if (TaskGrade == "Low") {
//         const StatusColor = "rgba(114, 194, 248, 1)";
//         return StatusColor;
//     } else if (TaskGrade == "Medium") {
//         const StatusColor = "rgba(243, 178, 73, 1)";
//         return StatusColor;
//     } else if (TaskGrade == "High") {
//         const StatusColor = "rgba(234, 61, 101, 1)";
//         return StatusColor;
//     }
// }

export default function TasksCard({ list }) {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible(!isVisible); // Изменяем состояние по нажатию кнопки
  };

  return (
    <MainList>
      {list &&
        list.map(task => (
          <Item key={task._id}>
            <Text>{`${task.title}`}</Text>
            <Wrapper>
              <Box>
                <Avatar src={`${user.user.avatarURL}`}></Avatar>
                <Grade color={`${task.priority}`}>{`${task.priority}`}</Grade>
              </Box>
              <List>
                <Dropdown id="dropdown">
                  <DropdownElement>
                    <DropdownText>In progress</DropdownText>
                    <SvgBtn>
                      <use
                        href={`${Icons}#icon-arrow-circle-broken-right`}
                      ></use>
                    </SvgBtn>
                  </DropdownElement>
                  <DropdownElement>
                    <DropdownText>Done</DropdownText>
                    <SvgBtn>
                      <use
                        href={`${Icons}#icon-arrow-circle-broken-right`}
                      ></use>
                    </SvgBtn>
                  </DropdownElement>
                </Dropdown>
                <DropdownBtn
                  id="dropdown-btn"
                  visible={isVisible}
                  onClick={handleClick}
                >
                  <SvgBtn>
                    <use href={`${Icons}#icon-arrow`}></use>
                  </SvgBtn>
                </DropdownBtn>
                <SvgBtn onClick={editTask}>
                  <use href={`${Icons}#icon-pencil-grey`}></use>
                </SvgBtn>
                <SvgBtn
                  onClick={() => {
                    dispatch(deleteTask(task._id));
                  }}
                >
                  <use href={`${Icons}#icon-trash`}></use>
                </SvgBtn>
              </List>
            </Wrapper>
          </Item>
        ))}
    </MainList>
  );
}
/*

edge="end"
              aria-label="delete"
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
            
*/
