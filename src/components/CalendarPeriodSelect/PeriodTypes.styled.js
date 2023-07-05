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

export const TypesContainerDay = styled(NavLink)`
  background-color: ${({ isactive }) =>
    isactive === 'yes'
      ? 'var(--active-selection)'
      : 'var(--calendar-bg-color)'};
  border-radius: ${({ tab }) =>
    tab === 'Day' ? '0 8px 8px 0;' : '8px 0 0 8px;'};
  border: 0;
  overflow: hidden;
  cursor: pointer;

  width: 76px;
  height: 34px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 82px;
  }

  color: ${({ isactive }) =>
    isactive === 'yes'
      ? 'var(--active-btn-calendar-switch)'
      : 'var(--noactive-btn-calendar-switch)'};

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  line-height: 1.29;
  text-align: center;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--active-selection);
    color: var(--active-btn-calendar-switch);
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const TypesTabs = styled(NavLink)`
  width: 100%;
  color: #3e85f3;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  line-height: 1.29;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1),
    250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(202, 232, 255, 1);
    color: rgba(62, 133, 243, 1);
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  margin: 0;
`;
