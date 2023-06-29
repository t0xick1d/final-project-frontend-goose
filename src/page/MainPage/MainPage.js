import React, { useState, useEffect } from 'react';
import goose from './svg/goose.svg';
import loginIcon from './svg/login-icon.svg';
import User from './image/avatar.jpg';

import Arrow_left from './svg/arrow-left.svg';
import Arrow_right from './svg/arrow-right.svg';

import image1_mb from './image/image1-mb.jpg';
import image2_mb from './image/image2-mb.jpg';
import image3_mb from './image/image3-mb.jpg';

import image1_tb from './image/image1-tb.jpg';
import image2_tb from './image/image2-tb.jpg';
import image3_tb from './image/image3-tb.jpg';

import image1_dt from './image/image1-dt.jpg';
import image2_dt from './image/image2-dt.jpg';
import image3_dt from './image/image3-dt.jpg';

import {
  Auth,
  Title,
  Navigation,
  SignUp,
  LogIn,
  NavElement,
  GooseIcon,
  Description,
  AdvantagesList,
  AdvantagesItem,
  Number,
  Advantages,
  Info,
  AdditionalInfo,
  InfoBlock,
  Reviews,
  ReviewsTitle,
  SliderInfo,
  UserInfo,
  Rating,
  Star,
  Name,
  Container,
  ImportantInfo,
  Nav,
  NavLink,
  Arrow,
  Users,
} from './MainPageStyle';
export default function MainPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let image1;
  let image2;
  let image3;

  if (windowWidth >= 1200) {
    image1 = image1_dt;
    image2 = image2_dt;
    image3 = image3_dt;
  } else if (windowWidth >= 768) {
    image1 = image1_tb;
    image2 = image2_tb;
    image3 = image3_tb;
  } else {
    image1 = image1_mb;
    image2 = image2_mb;
    image3 = image3_mb;
  }
  return (
    <>
      <Auth>
        <GooseIcon src={goose} alt="goose" />
        <Title>GooseTrack</Title>
        <Navigation>
          <NavElement>
            <LogIn>
              Log in <img src={loginIcon} alt="loginIcon" />
            </LogIn>
          </NavElement>

          <NavElement>
            <SignUp>Sign up</SignUp>
          </NavElement>
        </Navigation>
      </Auth>

      <Description>
        <AdvantagesList>
          <AdvantagesItem>
            <InfoBlock>
              <Number>1.</Number>
              <AdditionalInfo>Calendar</AdditionalInfo>
              <Advantages>view</Advantages>
              <Info>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </Info>
            </InfoBlock>
            <img src={image1} alt="image1"></img>
          </AdvantagesItem>

          <AdvantagesItem className="second-item">
            <InfoBlock className="second-infoblock">
              <Number>2.</Number>
              <Advantages>sidebar</Advantages>
              <Info>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </Info>
            </InfoBlock>
            <img src={image2} alt="image1"></img>
          </AdvantagesItem>

          <AdvantagesItem>
            <InfoBlock>
              <Number>3.</Number>
              <AdditionalInfo>all in</AdditionalInfo>
              <Advantages>one</Advantages>
              <Info className="infoblock-item">
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </Info>
            </InfoBlock>
            <img src={image3} alt="image1"></img>
          </AdvantagesItem>
        </AdvantagesList>
      </Description>

      <Reviews>
        <ReviewsTitle>reviews</ReviewsTitle>
        <Users>
          <UserInfo>
            <Container>
              <img src={User} alt="Avatar"></img>
              <ImportantInfo>
                <Name>Olena Doe </Name>
                <Rating>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                </Rating>
              </ImportantInfo>
            </Container>
            <SliderInfo>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </SliderInfo>
          </UserInfo>
          {windowWidth >= 1200 && (
            <UserInfo>
              <Container>
                <img src={User} alt="Avatar"></img>
                <ImportantInfo>
                  <Name>Olena Doe </Name>
                  <Rating>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                  </Rating>
                </ImportantInfo>
              </Container>
              <SliderInfo>
                GooseTrack is impressive, the calendar view and filter options
                make it easy to stay organized and focused. Highly recommended.
              </SliderInfo>
            </UserInfo>
          )}
        </Users>

        <Nav>
          <NavLink>
            <Arrow src={Arrow_left}></Arrow>
          </NavLink>
          <NavLink>
            <Arrow src={Arrow_right}></Arrow>
          </NavLink>
        </Nav>
      </Reviews>
    </>
  );
}
