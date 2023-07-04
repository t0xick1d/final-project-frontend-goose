import styled from 'styled-components';

export const Container = styled.div`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    max-width: 344px;
    padding: 20px;
  }
`;

export const ScrollableContainer = styled.div`
  max-height: 380px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 311px;
  @media screen and (min-width: 768px) {
    width: 315px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e7e5e5;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;