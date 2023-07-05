import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled('div')`
  background-color: var(--outlet-background-color);
  display: flex;
  flex-direction: column;
  background-color: var(--outlet-background-color);
`;

export const Container404 = styled('div')`
  position: relative;
  display: flex;
  margin: 285px auto 0;
  width: 252px;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  font-family: var(--main-font);

  @media screen and (min-width: 768px) {
    margin-top: 342px;
    width: 503px;
    height: 250px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 302px;
    width: 503px;
    height: 250px;
  }
`;

export const Number = styled('span')`
  font-size: 100px;
  font-weight: 700;
  color: var(--accent);

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 250px;
  }
`;

export const Image = styled('img')`
  position: absolute;
  left: 50%;
  bottom: -35px;
  width: 166px;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    left: 50%;
    bottom: -119px;
    width: 368px;
    transform: translateX(-50%);
  }
`;

export const Text = styled('p')`
  margin: 28px auto 0;
  width: 260px;
  text-align: center;

  font-size: 14px;
  font-family: var(--main-font);
  font-weight: 500;
  line-height: 18px;
  color: var(--text-404);
  z-index: 2;

  @media screen and (min-width: 768px) {
    margin: 80px auto 0;
    width: 387px;
  }
`;
export const Link = styled(NavLink)`
  color: var(--text-404);
`;
