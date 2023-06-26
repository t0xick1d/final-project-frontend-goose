import styled from 'styled-components';

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  box-sizing: border-box;
  border: 1px solid var(--calendar-border-color);
  border-radius: 8px;
  background-color: var(--calendar-bg-color);
  grid-auto-rows: minmax(102px, auto);

  @media screen and (min-width: 768px) {
    grid-auto-rows: minmax(144px, auto);
  }

  /* @media screen and (min-width: 1440px) {
    grid-auto-rows: minmax(125px, auto);
  } */
`;

export const Cell = styled.div`
  border: 1px solid var(--calendar-border-color);
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
    border: 1px solid var(--button-bgd-color);
  }
`;

export const Day = styled.p`
  color: var(--user-name-color);
  font-family: 'Inter';
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
    const { isWeekend, isToday, isSameMonth } = params;
    let style = '';
    if (isWeekend) {
      style += `
        color: var(--button-bgd-color);
      `;
    }
    if (isToday) {
      style += `
        background-color: var(--button-bgd-color);
        color: var(--white-color);
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
  font-size: 10px; // нужно проверить
  margin-bottom: 1px;
  padding: 4px;
  border-radius: 8px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-block-start: 0;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--color-task-low-priority);';

      case 'medium':
        return 'var(--color-task-medium-priority);';

      case 'high':
        return 'var(--color-task-high-priority);';

      default:
        return 'Black;';
    }
  }};
  background-color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--bgc-task-low-priority);';

      case 'medium':
        return 'var(--bgc-task-medium-priority);';

      case 'high':
        return 'var(--bgc-task-high-priority);';

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
  margin-right: 2px;
  padding: 0 4px;
  display: inline-block;
  border-radius: 8px;
  margin-block: 0;

  display: flex;

  justify-content: center;
  align-items: stretch;

  @media (min-width: 768px) {
    /* width: 16px;
    height: 16px; */
  }

  color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--color-task-low-priority);';

      case 'medium':
        return 'var(--color-task-medium-priority);';

      case 'high':
        return 'var(--color-task-high-priority);';

      default:
        return 'Black;';
    }
  }};
  background-color: ${props => {
    switch (props.priority) {
      case 'low':
        return 'var(--bgc-task-low-priority);';

      case 'medium':
        return 'var(--bgc-task-medium-priority);';

      case 'high':
        return 'var(--bgc-task-high-priority);';

      default:
        return '#ededed;';
    }
  }};
`;
