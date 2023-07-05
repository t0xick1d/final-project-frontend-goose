import styled from 'styled-components';

export const Container = styled.div`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--calendartable-border-color);
  background-color: var(--main-background-color);
  max-width: 335px;

  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 380px);

  @media screen and (min-width: 768px) {
    max-width: 344px;
    max-height: calc(100vh - 345px);
    padding: 20px;
  }
`;

export const ScrollableContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 14px;
  height: 100%;
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
