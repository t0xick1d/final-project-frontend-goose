import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Wrapper = styled.div`
  padding: 24px 20px;
  background-color: #eaeaea;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 32px;
  }

  //поки немає Side-bar
  @media screen and (min-width: 1440px) {
    margin-left: 289px;
  }
`;
