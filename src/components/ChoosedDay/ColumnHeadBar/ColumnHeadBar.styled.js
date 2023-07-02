import styled from 'styled-components';

export const ToDoSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  min-width: 360px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    min-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    gap: 27px;
    min-width: 1440px;
  }
`;
export const Container = styled.div`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--task-border-color);
  background: var(--sidebar-background-color);
  min-width: 334px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;
export const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  margin-bottom: 35px;
  min-width: 299px;
  @media screen and (min-width: 768px) {
    min-width: 304px;
    padding: 7px 0;
  }
`;
export const TextToDo = styled.p`
  color: var(--title-text-main-color);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: calc (20/18);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc (24/20);
  }
`;
export const AddTaskButton = styled.button`
  background-color: transparent;
  border: none;
  width: 22px;
  height: 22px;
  padding: 0;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const AddIcon = styled.svg`
  width: 22px;
  height: 22px;
  /* & use {
    fill: var(--title-text-main-color);
  } */
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ScrollableContainer = styled.div`
  max-height: 380px;
  overflow-y: scroll;
  overflow-x: hidden;

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--scroll-background-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
