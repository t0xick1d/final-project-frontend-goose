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
  Button,
  Burger,
} from './Header.styled';
import goose from 'images/icons/goose.png';
import icon from 'images/sprite.svg';
import { ThemeToggler } from 'components/ThemeToggle/ThemeToggle';

export default function Header({ onOpenClick }) {
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');

  const isTabletOrMobile = useMedia('(max-width: 1439px)');

  return (
    <Container>
      {isTabletOrMobile ? (
        <Burger onClick={onOpenClick}>
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
        <ThemeToggler />

        <UserInfo />
      </Wrapper>
    </Container>
  );
}
