import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: center;
  margin-bottom: 24px;
  background-color: var(--outlet-background-color);

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 32px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 768px) {
    /* display: block; */
    /* margin-bottom: 32px;
    align-items: center; */
  }

  @media screen and (min-width: 1440px) {
    /* margin-bottom: 32px; */
  }
`;

// export const TextWrapper = styled('button')`
//   min-width: 109px;
//   height: 30px;
//   color: var(--btn-text-color);

//   background: var(--accent-background-color);
//   border: none;
//   border-radius: 8px;
//   padding: 6px 12px;
//   cursor: pointer;
//   margin-bottom: 18px;

//   text-align: center;
//   font-family: Inter;
//   font-size: 14px;
//   font-weight: 700;
//   line-height: 1.28;
//   text-transform: uppercase;

//   @media screen and (min-width: 768px) {
//     margin-right: 8px;
//     min-width: 131px;
//     height: 34px;
//     margin-bottom: 0;
//   }
// `;
