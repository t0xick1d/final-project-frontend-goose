import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid var(--task-card-color);
  border-radius: 8px;
  padding: 14px 18px;
  background-color: var(--sidebar-background-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 18px;
    padding: 10px 46px;
  }
`;

export const WeekContainer = styled.div`
  gap: 19px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 26px;
  @media screen and (min-width: 768px) {
    gap: 69px;
  }
  @media screen and (min-width: 1440px) {
    gap: 128px;
  }
`;


export const Week = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
  border: 1px solid var(--calendar-border-color);
  border-radius: 8px;
  padding: 16px 0;
  background-color: var(--outlet-background-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    padding: 14px 0;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;

export const DayWeek = styled.button`
  width: calc(100% / 7);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.13;
  text-transform: uppercase;

  border-radius: 8px;
  background-color: transparent;
  color: var(--user-name-color);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(-accent-background-color);
    color: var(--btn-text-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.29;
  }
`;

export const Day = styled.button`
  width: calc(100% / 7);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 22px;
  border-radius: 6px;

  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.17;
  text-transform: uppercase;

  border-radius: 8px;
  justify-content: center;
  background-color: transparent;
  color: var(--user-name-color);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--accent-background-color);
    color: var(--btn-text-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    width: 27px;
    height: 26px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 27px;
    height: 26px;
    border-radius: 8px;
  }

  ${({ isToday }) => {
    if (isToday) {
      return `
      background-color: var(--accent-background-color);
        color: var(--btn-text-color);
      `;
    }
  }};
`;