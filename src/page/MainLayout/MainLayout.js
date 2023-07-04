import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { Suspense } from 'react';
import { Container, Wrapper } from './MainLayout.styled';
import { useEffect, useState } from 'react';

import Spiner from '../../components/Spiner/Spiner';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1440);

  const handleSidebarOpen = () => {
    if (window.innerWidth >= 1440) {
      return;
    }
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <SideBar isOpen={sidebarOpen} onCloseClick={handleSidebarOpen} />
      <Wrapper>
        <Header isOpen={sidebarOpen} onOpenClick={handleSidebarOpen} />

        {/* <main> */}
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
        {/* </main> */}
      </Wrapper>
    </Container>
  );
};

export default MainLayout;
