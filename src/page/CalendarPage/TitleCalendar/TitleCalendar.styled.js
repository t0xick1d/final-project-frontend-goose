import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 64px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const DivWrapper = styled('div')`
  display: block;

  border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.50);
background-color:#FFF;
  justify-content: space-between;
  width: 100%;
height: 50px;
  color: black;
  padding: 16px;
  position: relative;


  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const Days= styled('div')`
  display: flex;
flex-wrap: wrap;
gap: 30px;
border-radius: 8px;
  justify-content: space-between;
  width: 100%;
  color: black;
  padding: 16px;
  position: relative;

`;
export const Title= styled('div')`
color: #343434;
font-size: 16px;
font-family: Inter;
font-weight: 600;
line-height: 18px;
text-transform: uppercase;
`;