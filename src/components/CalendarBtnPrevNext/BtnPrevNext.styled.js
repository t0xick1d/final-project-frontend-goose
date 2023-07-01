import styled from 'styled-components';

    const size = {
      tablet: '768px',
      desktop: '1440px',
    };

    export const device = {
      tablet: `(min-width: ${size.tablet})`,
      desktop: `(min-width: ${size.desktop})`,
    };


export const BtnPrevContainer = styled.button`
  border-radius: 8px 0 0 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;
  background-color: #ffffff;
  width: 36px;
  height: 30px;
  margin: 0;
  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
`;

export const BtnNextContainer = styled.button`
  border-radius: 0 8px 8px 0;
  border: 1px solid rgba(220, 227, 229, 0.8);
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;

  background-color: #ffffff;
  width: 36px;
  height: 30px;
  margin: 0;

  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
`;


export const BtnPrevNextContainer = styled.div`
  display: flex;
`;
