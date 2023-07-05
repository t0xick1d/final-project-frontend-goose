import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* ------------------------------- AuthSection ------------------------------ */

export const Auth = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 78px;
  padding-right: 78px;
  padding-top: 232px;

  background-color: #3e85f3;
  flex: 1 1 auto;

  @media screen and (min-width: 768px) {
    padding-left: 86px;
    padding-right: 86px;
    padding-top: 321px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 422px;
    padding-right: 422px;
    padding-top: 187px;
  }
`;

export const Title = styled.h1`
  font-family: 'Coolvetica', sans-serif;
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
  font-family: 'Inter', sans-serif;
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

export const LogIn = styled(Link)`
  color: #ffffff;
  font-size: 14px;
  padding: 14px 33px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-image: linear-gradient(#fff, #fff);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
  border-radius: 15px;
  &:hover {
    background-size: 100% 100%;
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    padding-left: 22px;
    padding-right: 22px;
  }
`;

export const SignUp = styled(Link)`
  color: #ffffff;
  font-size: 14px;
  padding: 14px 33px;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(#fff, #fff);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
  border-radius: 15px;
  &:hover {
    background-size: 100% 100%;
    color: #3e85f3;
  }
`;

export const NavElement = styled.li`
  text-decoration: none;
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
/* -----------------------------  Description ----------------------------- */

export const Description = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    .second-item {
      flex-direction: row-reverse;
    }
  }
`;

export const AdvantagesItem = styled.li`
  p {
    width: fit-content;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    margin-bottom: 64px;

    .second-infoblock {
      margin-left: auto;
      justify-content: flex-end;
    }

    &:nth-child(2n + 1) {
      padding-left: 205px;
    }

    &:nth-child(2n) {
      padding-right: 205px;
    }
  }
`;

export const Number = styled.p`
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  color: #3e85f3;
  font-size: 80px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const Advantages = styled.p`
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #171820;
  text-transform: uppercase;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Info = styled.p`
  color: #111111e5;
  width: auto;
  font-family: 'Inter' sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 40px;
`;

export const AdditionalInfo = styled.p`
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: #dcebf7;
  color: #3e85f3;
  border-radius: 44px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
export const InfoBlock = styled.div`
  width: 335px;
  .infoblock-item {
    padding-right: 60px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 275px;
    &.second-infoblock {
      margin-left: auto;
      justify-content: flex-end;
    }
  }
`;
/* ------------------------------ ReviewsSlider ----------------------------- */
export const Reviews = styled.section`
  padding-bottom: 64px;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    padding-right: 94px;
    padding-left: 94px;
  }
`;

export const ReviewsTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: #3e85f3;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const UserInfo = styled.div`
  border: 1px solid #1111111a;
  padding: 24px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 32px;
  }
`;

export const Name = styled.p`
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #343434;
`;

export const Rating = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
`;

export const Users = styled.div`
  display: flex;
  gap: 24px;
`;

export const Star = styled.li`
  width: 14px;
  height: 14px;
  background-color: #ffac33;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

export const SliderInfo = styled.p`
  font-family: 'Inter' sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #111111b2;

  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;

export const ImportantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  gap: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const NavLink = styled.a`
  cursor: pointer;
`;

export const Arrow = styled.img``;

export const Footer = styled.footer`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 64px;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding-left: 94px;
    padding-right: 94px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
    padding-bottom: 118px;
  }
`;
