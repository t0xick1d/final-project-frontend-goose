import ButtonAddTask from 'components/ChoosedDay/ButtonAddTask/ButtonAddTask';
import React from 'react';
import { ToDoSection, Container, ContainerStatus, TextToDo } from './ColumnHeadBar.styled';
import AddComment from '../../images/icons/pluscircle.svg'
import { AddCommentButton } from './ColumnHeadBar.styled';

export default function ColumnHeadBar() {
  return (
      <ToDoSection>
          <Container>
      <ContainerStatus>
        <TextToDo>To do</TextToDo>
          <AddCommentButton>
            <img src={AddComment} alt="AddComment" /></AddCommentButton>
              </ContainerStatus>
              <ButtonAddTask />  
      </Container>
  <Container>
      <ContainerStatus>
        <TextToDo>In progress</TextToDo>
        <AddCommentButton> <img src={AddComment} alt="AddComment" /></AddCommentButton>
              </ContainerStatus>
              <ButtonAddTask />  
      </Container>
         <Container>
      <ContainerStatus>
        <TextToDo>Done</TextToDo>
              <AddCommentButton> <img src={AddComment} alt="AddComment" /></AddCommentButton>
              </ContainerStatus>
              <ButtonAddTask />   
          </Container>
    
      </ToDoSection>
      
  );
}
