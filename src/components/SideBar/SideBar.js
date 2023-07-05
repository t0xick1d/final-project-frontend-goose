import React from 'react';
import Icons from '../../images/sprite.svg';
import GooseImg from '../../images/icons/goose-min.png';
import GooseImgRetina from '../../images/icons/goose-min@2x.png';
import { CgClose } from 'react-icons/cg';
import {
  SideBarContainer,
  SideBarDiv,
  LogoConrainer,
  Logo,
  LogoIcon,
  Text,
  CloseBtn,
  SideBarNav,
  TitleSideBar,
  SideBarLink,
  IconUser,
  StyledNavLink,
  CalendarIcon,
  StatisticsIcon,
  LogOutBtn,
  LogoutIcon,
  Span,
} from './SideBar.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux-store/AuthOperations/AuthOperations';
import { format } from 'date-fns';

export default function SideBar({ onCloseClick, isOpen }) {
  const dispatch = useDispatch();

  const today = format(new Date(), 'yyyy-MM');
  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarDiv>
        <LogoConrainer>
          <Logo>
            <picture>
              <source srcSet={GooseImgRetina} media="(min-resolution: 2dppx)" />
              <LogoIcon src={GooseImg} alt="logo" />
            </picture>
            <Text>
              G<Span>oo</Span>seTrack
            </Text>
          </Logo>
          <CloseBtn onClick={onCloseClick}>
            <CgClose />
          </CloseBtn>
        </LogoConrainer>
        <SideBarNav>
          <TitleSideBar>User Panel</TitleSideBar>
          <SideBarLink>
            <li>
              <StyledNavLink to="account" onClick={onCloseClick}>
                <IconUser>
                  <use href={`${Icons}#icon-user-check`}></use>
                </IconUser>
                My account
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to={`/calendar/month/${today}`}
                onClick={onCloseClick}
              >

                <CalendarIcon>
                  <use href={`${Icons}#icon-calendar-check`}></use>
                </CalendarIcon>
                Calendar
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="statistics" onClick={onCloseClick}>
                <StatisticsIcon>
                  <use href={`${Icons}#icon-chart`}></use>
                </StatisticsIcon>
                Statistics
              </StyledNavLink>
            </li>
          </SideBarLink>
        </SideBarNav>
      </SideBarDiv>
      <LogOutBtn
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
        <LogoutIcon>
          <use href={`${Icons}#icon-log-out`}></use>
        </LogoutIcon>
      </LogOutBtn>
    </SideBarContainer>
  );
}
