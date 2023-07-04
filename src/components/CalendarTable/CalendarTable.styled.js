import styled from 'styled-components';

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  box-sizing: border-box;
  border: 1px solid var(--btn-border-color);
  border-radius: 8px;
  background-color: var(--main-background-color);
  grid-auto-rows: minmax(102px, auto);
  @media screen and (min-width: 768px) {
    grid-auto-rows: minmax(144px, auto);
  }
`;

export const Cell = styled.div`
  border: 1px solid var(--btn-border-color);
  cursor: pointer;
  padding: 2px;
  transition: transform 0.2s linear;

  @media screen and (min-width: 768px) {
    padding: 4px;
  }

  @media screen and (min-width: 1440px) {
    padding: 8px;
  }

  :hover {
    transform: scale(1.15);
    background-color: inherit;
    border: 1px solid var(--accent-background-color);
    z-index: 999;
  }
`;

export const Day = styled.p`
  color: var(--calendar-date-color);
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 22px;
  margin-left: auto;
  border-radius: 8px;
  padding: 0;
  margin-top: 8px;
  margin-right: 4px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    width: 27px;
    height: 26px;
    margin-top: 14px;
    margin-right: 14px;
    margin-bottom: 10px;
  }

  ${({ params }) => {
    const { isToday, isSameMonth } = params;
    let style = '';
    if (isToday) {
      style += `
        background-color: var(--accent);
        color: var(--btn-text-color);
      `;
    }
    if (isSameMonth) {
      style += `
        opacity: 30%;
      `;
    }
    return style;
  }};
`;

export const Task = styled.li`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  margin-bottom: 1px;
  padding: 4px;
  border-radius: 8px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-block-start: 0;
  position: relative;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--accent);';

      case 'medium':
        return 'var(--task-med-color);';

      case 'high':
        return 'var(--task-high-color);';

      default:
        return 'Black;';
    }
  }};
  background-color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--priority-low-color);';

      case 'medium':
        return 'var(--priority-med-color);';

      case 'high':
        return 'var(--priority-high-color);';

      default:
        return '#ededed;';
    }
  }};
  ${props => {
    if (props.group) {
      return `    
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    }
  }};
`;

export const Point = styled.p`
  font-size: 0.8em;
  font-weight: 600;
  min-width: 10px;
  height: 12px;
  line-height: 12px;
  border-radius: 4px;
  padding: 1px 3px 1px;
  color: white;
  background-color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--accent);';

      case 'medium':
        return 'var(--task-med-color);';

      case 'high':
        return 'var(--task-high-color);';

      default:
        return '#8b8b8b;';
    }
  }};
  @media (min-width: 768px) {
    min-width: 14px;
    height: 14px;
    line-height: 14px;
    padding: 0 5px 1px;
    border-radius: 5px;
  }
`;
