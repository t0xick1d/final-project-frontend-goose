import React, {useState} from 'react';
import Icons from '../../images/sprite.svg'
import GooseImg from '../../images/icons/goose-min.png'
import { CgClose } from 'react-icons/cg';
import {
  SideBarContainer,
  SideBarDiv,
  LogoConrainer,
  Logo,
  LogoIcon,
  LogoSvg,
  CloseBtn,
  SideBarNav,
  TitleSideBar,
  SideBarLink,
  IconUser,
  StyledNavLink,
  CalendarIcon,
  StatisticsIcon,
  LogOutBtn,
} from './SideBar.styled';


export default function SideBar() {
    const [isIconUserHovered, setIconUserHovered] = useState(false);
    const [isCalendarIconHovered, setCalendarIconHovered] = useState(false);
  
  return (
    <SideBarContainer>
      <SideBarDiv>
        <LogoConrainer>
          <Logo>
            <LogoIcon src={GooseImg} alt="logo" />
            <LogoSvg>
              <use href={`${Icons}#icon-GooseTrack`}></use>
            </LogoSvg>
          </Logo>
          <CloseBtn>
            <CgClose />
          </CloseBtn>
        </LogoConrainer>
        <SideBarNav>
          <TitleSideBar>User Panel</TitleSideBar>
          <SideBarLink>
            <li>
              <StyledNavLink
                to="account"
                onMouseEnter={() => setIconUserHovered(true)}
                onMouseLeave={() => setIconUserHovered(false)}
                onFocus={() => setIconUserHovered(true)}
                onBlur={() => setIconUserHovered(false)}
              >
                {isIconUserHovered ? (
                  <IconUser>
                    <use href={`${Icons}#user`}></use>
                  </IconUser>
                ) : (
                  <IconUser>
                    <use href={`${Icons}#icon-user-check`}></use>
                  </IconUser>
                )}
                My account
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="calendar"
                onMouseEnter={() => setCalendarIconHovered(true)}
                onMouseLeave={() => setCalendarIconHovered(false)}
                onFocus={() => setCalendarIconHovered(true)}
                onBlur={() => setCalendarIconHovered(false)}
              >
                {isCalendarIconHovered ? (
                  <CalendarIcon>
                    <use href={`${Icons}#calendar`}></use>
                  </CalendarIcon>
                ) : (
                  <CalendarIcon>
                    <use href={`${Icons}#icon-calendar-check`}></use>
                  </CalendarIcon>
                )}
                Calendar
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="statistics">
                <StatisticsIcon>
                  <use href={`${Icons}#icon-chart`}></use>
                </StatisticsIcon>
                Statistics
              </StyledNavLink>
            </li>
          </SideBarLink>
        </SideBarNav>
      </SideBarDiv>

      <LogOutBtn>Log out</LogOutBtn>
    </SideBarContainer>
  );
}
