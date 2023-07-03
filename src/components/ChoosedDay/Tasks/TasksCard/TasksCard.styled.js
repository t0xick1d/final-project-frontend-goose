import styled from 'styled-components';

export const MainList = styled.ul`
  margin-right: 8px;
`;

export const Item = styled.li`
  display: block;
  border-radius: 8px;
  border: 1px solid var(--task-border-color);
  background: var(--outlet-background-color);
  width: 300px;
  height: 112px;

  padding: 14px;
  margin-bottom: 18px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  overflow: hidden;
  color: var(--title-text-main-color);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 32px;
`;
export const Avatar = styled.img`
  display: flex;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;
`;
export const Grade = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  border-radius: 4px;
  background: ${props =>
    props.color === 'low'
      ? 'var(--task-low-color)'
      : props.color === 'medium'
      ? 'var(--task-med-color)'
      : 'var(--task-high-color)'};
  color: var(--text-priority-high-color);
  text-align: center;
  font-size: 10px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 12px;

  padding: 4px 12px;
  margin-left: 8px;
`;
export const List = styled.ul`
  display: flex;
  margin-left: auto;
  list-style: none;
  overflow: hidden;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 0;
  flex-wrap: wrap;
  align-content: flex-end;
`;
export const SvgBtn = styled.svg`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: currentColor;
`;
export const Dropdown = styled.div`
  position: absolute;
  margin-top: 16px;
  width: 99px;
  height: 50px;
  display: ${props => (props.visible ? 'inline-flex' : 'none')};
  /* display: block; */
  padding: 20px 24px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  gap: 14px;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const DropdownElement = styled.div`
  min-width: 99px;
  display: flex;
  align-items: center;
`;
export const DropdownText = styled.p`
  color: var(--calendar-date-color);
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 18px;
  margin: 0px;
  margin-right: auto;
`;
export const DropdownBtn = styled.button`
  border: none;
  color: transparent;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;
