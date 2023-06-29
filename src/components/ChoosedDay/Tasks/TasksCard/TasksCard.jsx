import React, { useState } from 'react';
import {
  List,
  SvgBtn,
  Container,
  Wrapper,
  Box,
  Text,
  // Avatar,
  // Grade,
  Dropdown,
  DropdownElement,
  DropdownText,
  DropdownBtn,
} from './TasksCard.styled';
import Icons from '../../../../images/sprite.svg';
import { editTask, deleteTask } from '../../../../redux-store/tasks/tasksOperations';
// import { useSelector } from 'react-redux';
// import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
// import { useDispatch } from 'react-redux';

// const TaskMessage = "Task Message"; // тут треба текст
//const Avatar =  // а тут аватарка
//const TaskGrade = dsd; // а тут рівень(типу низький, середній або високий)

// це варіант, якщо меню не вилазить
// var dropdownBtn = document.querySelector('#dropdown-btn');
// var dropdown = document.querySelector('#dropdown');

// dropdownBtn.addEventListener('click', function() {
//     dropdown.classList.toggle('hidden');
//   });

//  window.addEventListener('click', function(event) {
//   if (!event.target.matches(dropdown)) {
//     if (dropdown.classList.contains('hidden') = false) {
//       dropdown.classList.add('hidden');
//     }
//   }
// });

// function checkStatus(){
//     if(TaskGrade == "Low"){
//         const StatusColor = "rgba(114, 194, 248, 1)";
//         return StatusColor;
//     } else if (TaskGrade == "Medium"){
//         const StatusColor = "rgba(243, 178, 73, 1)";
//         return StatusColor;
//     } else if (TaskGrade == "High"){
//         const StatusColor = "rgba(234, 61, 101, 1)";
//         return StatusColor;
//     }
// }

export default function TasksCard() {
  const [isVisible, setIsVisible] = useState(false);
  

  

  // const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible(!isVisible); // Изменяем состояние по нажатию кнопки
  };

  return (
    <Container>
      <Text>`${}`</Text>
      <Wrapper>
        <Box>
          {/* <Avatar src={`${Avatar}`}></Avatar> */}
          {/* <Grade color={`${GradeColor}`}></Grade> */}
        </Box>
        <List>
          <Dropdown id="dropdown">
            <DropdownElement>
              <DropdownText>In progress</DropdownText>
              <SvgBtn>
                <use href={`${Icons}#icon-arrow-circle-broken-right`}></use>
              </SvgBtn>
            </DropdownElement>
            <DropdownElement>
              <DropdownText>Done</DropdownText>
              <SvgBtn>
                <use href={`${Icons}#icon-arrow-circle-broken-right`}></use>
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
          <SvgBtn onClick={deleteTask}>
            <use href={`${Icons}#icon-trash`}></use>
          </SvgBtn>
        </List>
      </Wrapper>
    </Container>
  );
}
