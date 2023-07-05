import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 64px;

  @media screen and (min-width: 1439px) {
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  position: relative;
  &:not(:first-child) {
    margin-left: auto;
  }
`;

export const Burger = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--calendar-date-color);
  fill: none;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    width: 34px;
    height: 34px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: var(--title-text-main-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Motivation = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: var(--title-text-main-color);
`;

export const Image = styled.img`
  width: 64px;
  height: 60px;
  margin-right: 10px;
`;

export const Accent = styled.span`
  color: var(--accent);
`;

//Button
export const Button = styled.button`
  width: 130px;
  height: 42px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: #fff;

  background: #3e85f3;
  border: none;
  border-radius: 14px;

  margin-right: 24px;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 375px) {
    margin-right: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 97px;
    height: 32px;
  }
  &:hover,
  :focus {
    cursor: pointer;
    background-color: #2b78ef;
  }
`;
