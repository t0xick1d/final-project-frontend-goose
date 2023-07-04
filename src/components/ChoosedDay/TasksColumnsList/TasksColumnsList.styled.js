import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  max-width: 360px;
  flex: 1 1 auto;

  overflow-x: auto;
  overflow-y: hidden;

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    height: 12px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--scroll-background-color);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    border-radius: 12px;
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
