import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

    const size = {
      tablet: '768px',
      desktop: '1440px',
    };

    export const device = {
      tablet: `(min-width: ${size.tablet})`,
      desktop: `(min-width: ${size.desktop})`,
    };


// export const TypesContainerDay = styled.button`
//   border-radius: 0 8px 8px 0;
//   border: 0;
//   overflow: hidden;
//   cursor: pointer;
//   color: ${({ isActive }) =>
//     isActive ? 'var(--calendar-date-color)' : 'var(--modal-edit-icon-fill)'};
//   background-color: ${({ isActive }) =>
//     isActive ? 'var(--active-selection)' : 'var(--main-background-color)'};
//   width: 76px;
//   height: 34px;
//   margin: 0;
//   @media ${device.tablet} {
//     width: 82px;
//   }
// `;
// color: #3e85f3
export const TypesContainer = styled.button`
  border-radius: ${({ lastChild }) =>
    lastChild ? '0 8px 8px 0' : '8px 0 0 8px'};
  border: 0;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive
      ? 'var(--background-button-month)'
      : 'var(--background-button-day)'};
  width: 76px;
  height: 34px;
  margin: 0;
  @media ${device.tablet} {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--background-button-month);
    color: var(--active-btn-calendar-switch);
  }
`;
export const TypesTabs = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  line-height: 1.29;
  text-align: center;
  color: ${({ isActive }) =>
    isActive
      ? 'var(--active-btn-calendar-switch)'
      : 'var( --noactive-btn-calendar-switch)'};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1),
    250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.12;
  }
`;


export const BtnContainer = styled.div`
  display: flex;
  margin: 0;
`;
