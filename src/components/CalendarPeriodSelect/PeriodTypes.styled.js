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


export const TypesContainerDay = styled.button`
  border-radius: 0 8px 8px 0;
  border: 0;
  overflow: hidden;
  cursor: pointer;

  background-color: ${({ isActive }) =>
    isActive ? 'rgba(202, 232, 255, 1)' : 'rgba(227, 243, 255, 1)'};
  width: 76px;
  height: 34px;
  margin: 0;
  @media ${device.tablet} {
    width: 82px;
  }
`;

export const TypesContainerMonth = styled.button`
  border-radius: 8px 0 0 8px;
  border: 0;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(202, 232, 255, 1)' : 'rgba(227, 243, 255, 1)'};
  width: 76px;
  height: 34px;
  margin: 0;
  @media ${device.tablet} {
    width: 82px;
  }
`;

export const TypesTabs = styled(NavLink)`
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
    background-color: rgba(202, 232, 255, 1)
    color: rgba(62, 133, 243, 1)
  }

      @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.12;
    }

`;


export const BtnContainer = styled.div`
  display: flex;
`;


