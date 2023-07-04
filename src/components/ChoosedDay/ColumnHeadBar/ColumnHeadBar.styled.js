import styled from 'styled-components';

export const ToDoSection = styled.section`
  color: var(--title-text-main-color);

  display: flex;
  align-items: flex-start;
  gap: 18px;
  min-width: 360px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    gap: 27px;
    overflow-x: hidden;
  }
`;
export const Container = styled.div`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--task-border-color);
  background-color: var(--sidebar-background-color);
  min-width: 334px;
  width: 100%;
  height: 100%;
  max-width: 432px;
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
  color: var(--title-text-main-color);
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
  fill: currentColor;
  width: 22px;
  height: 22px;

  cursor: pointer;
  fill: none;
  stroke: var(--title-text-main-color);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    stroke: var(--accent);
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ScrollableContainer = styled.div`
  background-color: var(--sidebar-background-color);
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
