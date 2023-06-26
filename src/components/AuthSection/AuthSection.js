import React from 'react';
import goose from './svg/goose.svg';
import loginIcon from './svg/login-icon.svg';
import {
  Auth,
  Title,
  Navigation,
  SignUp,
  LogIn,
  NavElement,
  GooseIcon,
} from './AuthSectionStyle';

export const AuthSection = () => {
  return (
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
  );
};
