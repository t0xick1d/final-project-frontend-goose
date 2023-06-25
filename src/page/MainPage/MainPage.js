import React from 'react';
import goose from './svg/goose.svg';
import loginIcon from './svg/login-icon.svg';
import {
  AuthSection,
  Title,
  Navigation,
  SignUp,
  LogIn,
  NavElement,
  GooseIcon,
} from './MainPageStyled';

export default function MainPage() {
  return (
    <AuthSection>
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
    </AuthSection>
  );
}
