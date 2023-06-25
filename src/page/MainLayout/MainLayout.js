import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import SideBar from '../../components/SideBar/SideBar';
import { Suspense } from 'react';




const MainLayout = () => {
  return (
    <Container>
      {/* <SideBar/> */}
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
