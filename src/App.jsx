import { Route, Routes } from 'react-router-dom';

import MainPage from './page/MainPage/MainPage';
import LogIn from 'page/LogIn/LogIn';
import SingUp from 'page/SingUp/SingUp';
import MainLayout from 'page/MainLayout/MainLayout';
import AccountPage from 'page/AccountPage/Account';
import CalendarPage from 'page/CalendarPage/Calendar';
import StatisticsPage from 'page/StatisticsPage/Statistics';

import PrivatRoute from 'PrivateRute';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/account"
            element={
              <PrivatRoute redirectTo="/login" component={<AccountPage />} />
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivatRoute redirectTo="/login" component={<CalendarPage />} />
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivatRoute redirectTo="/login" component={<StatisticsPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
