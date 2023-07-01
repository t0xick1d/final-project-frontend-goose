import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  min-height: 74px;
  max-width: 335px;
  padding: 14px 18px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    min-height: 74px;
    padding: 10px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1087px;
    padding: 10px 46px;
  }
`;

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  margin: 10px 0px 0px 0px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 768px) {
  }
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
  color: #343434;
  padding: 0px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3e85f3;
    color: #e3f3ff;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
