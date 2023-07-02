import styled from 'styled-components';

export const SectionDay = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;

  @media screen and (min-width: 1440px) {
    overflow-x: hidden;
  }
`;
