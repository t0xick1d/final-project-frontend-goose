import styled from 'styled-components';

export const Section = styled.section`
  /* padding: 20px 24px 22px 24px; */
  display: flex;
  align-items: flex-start;
  gap: 18px;
  max-width: 360px;
  /* overflow-x: scroll; */
  flex: 1 1 auto;

  overflow-x: auto;
  overflow-y: hidden;

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    height: 14px;
    /* width: thin; */
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

  @media screen and (min-width: 768px) {
    gap: 16px;
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    gap: 27px;
    max-width: 1440px;
  }
`;
