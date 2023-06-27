import styled from 'styled-components';

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const MainContainer = styled.div`
  display: inline-flex;
  padding: 28px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 307px;
  height: 68px;
  border: 1px solid black;
`;
