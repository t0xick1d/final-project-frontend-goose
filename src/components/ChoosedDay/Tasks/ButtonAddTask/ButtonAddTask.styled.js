import styled from 'styled-components';

export const AddTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  height: 48px;
  padding: 16px 20px 16px 20px;

  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: var(--background-button-day-add);
  color: var(--title-text-main-color);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: calc (18/14);
  &:focus,
  :hover {
    border: 1px solid #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(62, 133, 243, 0.48);
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;
export const AddTaskIcon = styled.svg`
  fill: currentColor;
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #111111;
`;
