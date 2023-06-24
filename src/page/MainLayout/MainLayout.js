import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { Suspense } from 'react';
import { Container, Wrapper } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <Header />

        <main>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Wrapper>
    </Container>
  );
};

export default MainLayout;
