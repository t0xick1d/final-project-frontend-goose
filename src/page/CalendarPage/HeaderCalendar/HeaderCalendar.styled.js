import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: center;
  margin-bottom: 24px;
  background-color: #F7F6F9;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
   
  }
`;


export const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  position: relative;
`;


export const TextWrapper = styled('button')`
  width: 118px;
  height: 42px;
  color: #fff;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
padding: 6px 12px;
cursor: pointer;

  color: #FFF;
text-align: center;
font-size: 14px;
font-weight: 700;
line-height: 1.28;
text-transform: uppercase;

  @media screen and (max-width: 375px) {
    margin-right: 18px;
    }`;

export const ButtonsWrapper = styled('div')`
   display: flex;
  align-items: center;
  `;

export const ButtonWrapper = styled('button')`
  border: unset;
  height: 20px;
  border-radius: 4px;
  outline: unset;
  cursor:pointer;
  &:not(:last-child){
    margin-right: 2px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
