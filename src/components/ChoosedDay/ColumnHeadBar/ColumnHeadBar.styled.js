import styled from 'styled-components';

export const ToDoSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  max-width: 100%;
`;
export const Container = styled.div`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;
  min-width: 335px;
  /* min-width: 100vw; */
`;
export const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  margin-bottom: 35px;
`;
export const TextToDo = styled.p`
  color: #111;
  text-align: center;
  font-size: 18px;

  font-weight: 700;
  line-height: calc (20/18);
`;
export const AddCommentButton = styled.button`
  background-color: transparent;
  border: none;
  width: 22px;
  height: 22px;
`;
