import ButtonAddTask from 'components/ButtonAddTask/ButtonAddTask';
import React from 'react';
import { ToDoSection, Container, ContainerStatus, TextToDo } from './ColumnHeadBar.styled';

export default function ColumnHeadBar() {
  return (
      <ToDoSection>
          <Container>
      <ContainerStatus>
        <TextToDo>To do</TextToDo>
        <button>+</button>
              </ContainerStatus>
              <ButtonAddTask />  
      </Container>
  <Container>
      <ContainerStatus>
        <TextToDo>In progress</TextToDo>
        <button>+</button>
              </ContainerStatus>
              <ButtonAddTask />  
      </Container>
         <Container>
      <ContainerStatus>
        <TextToDo>Done</TextToDo>
              <button>+</button>
              </ContainerStatus>
              <ButtonAddTask />   
          </Container>
    
      </ToDoSection>
      
  );
}
