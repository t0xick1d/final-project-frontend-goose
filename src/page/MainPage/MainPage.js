import React, { useState, useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import logo_mb_1 from './image/logo_mb@1.png';
import logo_tb_1 from './image/logo_tb@1.png';
import logo_dt_1 from './image/logo_dt@1.png';

import logo_mb_2_retina from './image/logo_mb@2.png';
import logo_tb_2_retina from './image/logo_tb@2.png';
import logo_dt_2_retina from './image/logo_dt@2.png';

import image1_mb from './image/image1-mb.jpg';
import image1_tb from './image/image1-tb.jpg';
import image1_dt from './image/image1-dt.jpg';

import image1_mb_retina from './image/image1_mb_retina.jpg'
import image1_tb_retina from './image/image1_tb_retina.jpg'
import image1_dt_retina from './image/image1_dt_retina.jpg'


import image2_mb from './image/image2-mb.jpg';
import image2_tb from './image/image2-tb.jpg';
import image2_dt from './image/image2-dt.jpg';

import image2_mb_retina from './image/image2_mb_retina.jpg'
import image2_tb_retina from './image/image2_tb_retina.jpg'
import image2_dt_retina from './image/image2_dt_retina.jpg'


import image3_mb from './image/image3-mb.jpg';
import image3_tb from './image/image3-tb.jpg';
import image3_dt from './image/image3-dt.jpg';

import image3_mb_retina from './image/image3_mb_retina.jpg'
import image3_tb_retina from './image/image3_tb_retina.jpg'
import image3_dt_retina from './image/image3_dt_retina.jpg'


import {
  Auth,
  Title,
  Navigation,
  SignUp,
  LogIn,
  NavElement,
  Description,
  AdvantagesList,
  AdvantagesItem,
  Number,
  Advantages,
  Info,
  AdditionalInfo,
  InfoBlock,
  Footer,
} from './MainPageStyle';

import ReviewsSlider from '../../components/Reviews/ReviewsSlider';

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
  let imageSize;
  
  if (windowWidth >= 1200) {
    image1 = window.devicePixelRatio >= 2 ? image1_dt_retina : image1_dt;
    image2 = window.devicePixelRatio >= 2 ? image2_dt_retina : image2_dt;
    image3 = window.devicePixelRatio >= 2 ? image3_dt_retina : image3_dt;
    imageSize = { width: 604};
  } else if (windowWidth >= 768) {
    image1 = window.devicePixelRatio >= 2 ? image1_tb_retina : image1_tb;
    image2 = window.devicePixelRatio >= 2 ? image2_tb_retina : image2_tb;
    image3 = window.devicePixelRatio >= 2 ? image3_tb_retina : image3_tb;
    imageSize = { width: 704};
  } else {
    image1 = window.devicePixelRatio >= 2 ? image1_mb_retina : image1_mb;
    image2 = window.devicePixelRatio >= 2 ? image2_mb_retina : image2_mb;
    image3 = window.devicePixelRatio >= 2 ? image3_mb_retina : image3_mb;
    imageSize = { width: 335};
  }
  

  let logo;

  if (windowWidth >= 1200) {
    logo = (
      <picture>
        <source srcSet={logo_dt_2_retina} media="(min-resolution: 2dppx)" />
        <img src={logo_dt_1} alt="logo" style={{ width: '150px' }}/>
      </picture>
    );
  } else if (windowWidth >= 768) {
    logo = (
      <picture>
        <source srcSet={logo_tb_2_retina} media="(min-resolution: 2dppx)" />
        <img src={logo_tb_1} alt="logo" style={{ width: '150px' }}/>
      </picture>
    );
  } else {
    logo = (
      <picture>
        <source srcSet={logo_mb_2_retina} media="(min-resolution: 2dppx)" />
        <img src={logo_mb_1} alt="logo" style={{ width: '142px' }}/>
      </picture>
    );
  }

  return (
    <>
      <Auth>
        {logo} 
        <Title>GooseTrack</Title>
        <Navigation>
          <NavElement>
            <LogIn to="/login">
              Log in
              <IconContext.Provider value={{ size: '18px' }}>
                <FiLogIn style={{ marginLeft: '6px' }} />
              </IconContext.Provider>
            </LogIn>
          </NavElement>

          <NavElement>
            <SignUp to="register">Sign up</SignUp>
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
            <img src={image1} alt="image1" style={imageSize}></img>
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
            <img src={image2} alt="image2" style={imageSize}></img>
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
            <img src={image3} alt="image3" style={imageSize}></img>
          </AdvantagesItem>
        </AdvantagesList>
      </Description>

      <Footer>
        <ReviewsSlider />
      </Footer>
    </>
  );
}
