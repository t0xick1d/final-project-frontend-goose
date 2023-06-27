import React from 'react';
import goose from './svg/goose.svg';
import loginIcon from './svg/login-icon.svg';
import { Link } from 'react-router-dom';
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
          <Link to="/register">
            <LogIn>
              Log in <img src={loginIcon} alt="loginIcon" />
            </LogIn>
          </Link>
        </NavElement>

        <NavElement>
          <Link to="/login">
            <SignUp>Sign up</SignUp>
          </Link>
        </NavElement>
      </Navigation>
    </Auth>
  );
};
