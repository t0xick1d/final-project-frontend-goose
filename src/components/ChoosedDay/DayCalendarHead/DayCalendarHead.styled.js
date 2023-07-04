import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  text-transform: uppercase;

  min-height: 74px;
  max-width: 335px;
  margin-bottom: 16px;
  border: 1px solid var(--calendartable-border-color);
  border-radius: 8px;
  padding: 14px 18px;
  background-color: var(--main-background-color);
  @media screen and (min-width: 768px) {
    max-width: 704px;
    min-height: 74px;
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    /* margin-bottom: 18px; */
    max-width: 1087px;
    padding: 10px 46px;
  }

  //
  /* font-family: 'Inter', sans-serif;
  min-height: 74px;
  max-width: 335px; */
  /* padding: 14px 18px; */
  /* background: #ffffff; */
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  /* border-radius: 8px; */
  /* margin-bottom: 16px; */
  /* background-color: #ffffff; */
  /* @media screen and (min-width: 768px) {
    max-width: 704px;
    min-height: 74px; */
  /* padding: 10px 32px; */
  /* } */
  /* @media screen and (min-width: 1440px) {
    max-width: 1087px;
    padding: 10px 46px;
  } */
`;

export const WeekContainer = styled.div`
  /* gap: 19px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 0px 0px;
  /* justify-content: space-around; */
  /* align-items: center; */
  /* min-height: 26px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 69px;
  }
  @media screen and (min-width: 1440px) {
    gap: 128px;
  } */
  //
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  margin: 10px 0px 0px 0px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 768px) {
  } */
`;

export const Week = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
  border: 1px solid var(--btn-border-color);
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
  color: var(--calendar-day-color);
  border: none;
  cursor: pointer;
  ${props => {
    if (props.isCurrentDay) {
      return `    
      background-color: #3e85f3;
      color: #ffffff;
    `;
    }
    return `    
      background-color: inherit;
      color: inherit;
    `;
  }};

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
  color: var(--calendar-date-color);
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

export const DayOfWeek = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #343434;
  margin: 0px 0px 4px 0px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 19px;
  align-items: center;
  min-height: 26px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 69px;
  }
  @media screen and (min-width: 1440px) {
    gap: 128px;
  }
`;

export const DateButton = styled.button`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  width: 27px;
  height: 26px;
  border-radius: 8px;
  background-color: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
  ${props => {
    if (props.isCurrentDay) {
      return `    
      background-color: #3e85f3;
      color: #ffffff;
    `;
    }
    return `    
      background-color: inherit;
      color: var(--calendar-date-color);
    `;
  }};

  &:hover {
    background-color: #3e85f3;
    color: #e3f3ff;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
