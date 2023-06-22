import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { Suspense } from 'react';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default MainLayout;
