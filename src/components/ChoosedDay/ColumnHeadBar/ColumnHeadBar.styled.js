import styled from 'styled-components';

export const ToDoSection = styled.section`
  /* padding: 20px 24px 22px 24px; */
  display: flex;
  align-items: flex-start;
  gap: 18px;
  min-width: 360px;
  /* overflow-x: scroll; */

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
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;
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
  color: #111;
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
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
