import styled from 'styled-components';
import { BarChart } from 'recharts';

    const size = {
      tablet: '768px',
      desktop: '1440px',
    };

    export const device = {
      tablet: `(min-width: ${size.tablet})`,
      desktop: `(min-width: ${size.desktop})`,
    };


export const StatisticsContainer = styled.div`
  margin: 0 auto;

  max-width: 100%;
  height: 100%;
  position: relative;
  background: #ffffff;
  border-radius: 16px;
`;

export const ButtonWrapper = styled('button')`
  min-width: 121px;
  height: 30px;
  color: #fff;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  @media ${device.tablet} {
    min-width: 134px;
    height: 34px;
    margin-right: 8px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const OptionsContainer = styled.div`

  padding-top: 28px;
  padding-right: 14px;
  padding-left: 14px;
  @media ${device.tablet} {
    padding-top: 132px;
    padding-right: 64px;
    padding-left: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.desktop} {
    padding-top: 134px;
    padding-right: 154px;
    padding-left: 153px;
  }
`;


export const IconSvg = styled.svg`
  width: 8px;
  height: 8px;
  margin-right: 8px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  @media ${device.tablet} {
    margin-top: 0px;
  }
`;

export const Item = styled.li`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;


export const ChartWrapper = styled.div`
  padding-right: 14px;
  padding-left: 14px;

`;

export const StyledBarChart = styled(BarChart)`
  display: flex;
  justify-content: center;
  align-items: center;
`;