import styled from 'styled-components';

export const SectionDay = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 24px 22px 24px;
  overflow-x: scroll;
  @media screen and (min-width: 768px) {
    padding: 24px 32px 18px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    overflow-x: hidden;
  }
`;
