import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { ThemeToggler } from 'components/ThemeToggle/ThemeToggle';
import { useState } from 'react';
import { selectArrTasks } from 'redux-store/tasks/tasksSelectors';
import { useSelector } from 'react-redux';
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
import AddFeedbackModal from 'components/AddFeedbackModal/AddFeedbackModal';

export default function Header({ onOpenClick }) {
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');
  const isActivePageDay = location.pathname.includes('day');
  const isActivePageStatistics = location.pathname.includes('statistics');

  const isTabletOrMobile = useMedia('(max-width: 1439px)');
  const todoList = useSelector(selectArrTasks);

  const [open, setOpenModalFeedback] = useState(false);
  const handleOpenModalFeedback = () => setOpenModalFeedback(true);
  const handleCloseModalFeedback = () => setOpenModalFeedback(false);

  return (
    <Container>
      {isTabletOrMobile ? (
        <Wrapper>
          <Burger onClick={onOpenClick}>
            <use href={icon + '#icon-menu'}></use>
          </Burger>
          <Wrapper>
            <Button onClick={handleOpenModalFeedback}>Feedback</Button>
            <ThemeToggler />
            <UserInfo />
            <AddFeedbackModal
              open={open}
              handleClose={handleCloseModalFeedback}
            />
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          {todoList.length > 0 &&
          todoList[0].taskId !== null &&
          isActivePageDay ? (
            <>
              <Image src={goose} alt="Goose"></Image>
              <div>
                <H2>Calendar</H2>
                <Motivation>
                  <Accent>Let go </Accent>of the past and focus on the present!
                </Motivation>
              </div>
            </>
          ) : isActivePageCalendar ? (
            <H2>Calendar</H2>
          ) : isActivePageStatistics ? (
            <H2>Statistics</H2>
          ) : (
            <H2>User Profile</H2>
          )}
          <Wrapper>
            <Button onClick={handleOpenModalFeedback}>Feedback</Button>
            <ThemeToggler />
            <UserInfo />
            <AddFeedbackModal
              open={open}
              handleClose={handleCloseModalFeedback}
            />
          </Wrapper>
        </Wrapper>
      )}
    </Container>
  );
}
