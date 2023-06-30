import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Name = styled.span`
  margin-right: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--calendar-date-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1.8px solid var(--accent);
  background-color: var(--outlet-background-color);
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const AvatarLetter = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: var(--accent);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
