import styled from 'styled-components';

export const Auth = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 78px;
  padding-right: 78px;
  padding-top: 232px;

  background-color: #3e85f3;

  @media screen and (min-width: 768px) {
    padding-left: 86px;
    padding-right: 86px;
    padding-top: 321px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 422px;
    padding-right: 422px;
    padding-top: 187px;
  }
`;

export const Title = styled.h1`
  font-family: 'Coolvetica';
  font-size: 44px;
  color: #ffffff;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 150px;
    margin-bottom: 40px;
  }
`;
export const Navigation = styled.nav`
  font-family: 'Inter';
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 208px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: baseline;
    gap: 24px;
    margin-bottom: 200px;
  }
`;

export const LogIn = styled.a`
  background-color: #ffffff;
  color: #3e85f3;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 16px;
  cursor: pointer;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 33px;
  padding-right: 33px;
  &:hover {
    box-shadow: 4px 2px 16px 0px #88a5bf7a;
  }

  @media screen and (min-width: 768px) {
    padding-left: 22px;
    padding-right: 22px;
  }
`;

export const SignUp = styled.a`
  color: #ffffff;
  border-bottom: solid 1px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 9.399999618530273px 57.6875px 0px #00000009;
    box-shadow: 0px 47px 355px 0px #00000012;
  }
`;

export const NavElement = styled.li`
  &:nth-child(2) {
    margin-bottom: 88px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

export const GooseIcon = styled.img`
  width: 142px;
  height: 142px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;
