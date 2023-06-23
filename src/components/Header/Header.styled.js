import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  @media screen and (min-width: 1440px) {
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
  stroke: #343434;
  fill: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #111111;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Motivation = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #111111;
`;

export const Image = styled.img`
  width: 64px;
  height: 60px;
  margin-right: 10px;
`;

export const Accent = styled.span`
  color: #3e85f3;
`;

//UserInfo

export const Name = styled.span`
  margin-right: 14px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #343434;
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
  border: 1.8px solid #3e85f3;
  background-color: #f7f6f9;
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
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

//Toggle

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Svg = styled.svg`
  display: flex;
  align-items: center;
  width: 19px;
  height: 19px;
  margin-right: 14px;
  fill: #3e85f3;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

//Button
export const Button = styled.button`
  width: 130px;
  height: 42px;
  color: #fff;

  background: #3e85f3;
  border: none;
  border-radius: 14px;

  margin-right: 24px;

  cursor: pointer;

  @media screen and (max-width: 375px) {
    margin-right: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 97px;
    height: 32px;
  }
`;
