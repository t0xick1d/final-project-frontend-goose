import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';
import { UserInfo } from 'components/UserInfo/UserInfo';
import {
  Container,
  Image,
  H2,
  Wrapper,
  Motivation,
  Accent,
  Svg,
  Input,
  Button,
  Burger,
} from './Header.styled';
import goose from 'images/icons/goose.png';
import icon from 'images/sprite.svg';

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true' || false
  );

  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme);
  }, [darkTheme]);

  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');

  const isTabletOrMobile = useMedia('(max-width: 1440px)');

  return (
    <Container>
      {isTabletOrMobile ? (
        <Burger onClick={() => console.log('click')}>
          <use href={icon + '#icon-menu'}></use>
        </Burger>
      ) : isActivePageCalendar ? (
        <>
          <Image src={goose} alt="Goose"></Image>
          <div>
            <H2>Calendar</H2>
            <Motivation>
              <Accent>Let go </Accent>of the past and focus on the present!
            </Motivation>
          </div>
        </>
      ) : (
        <H2>User Profile</H2>
      )}

      <Wrapper>
        <Button>Feedback</Button>
        <label>
          <Input
            type="checkbox"
            onChange={() => {
              setDarkTheme(!darkTheme);
            }}
          />

          <Svg>
            <use href={icon + (darkTheme ? '#icon-sun' : '#icon-moon')}></use>
          </Svg>
        </label>
        <UserInfo />
      </Wrapper>
    </Container>
  );
}
