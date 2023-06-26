import { Route, Routes } from 'react-router-dom';

import MainPage from './page/MainPage/MainPage';
import LoginPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';
import MainLayout from 'page/MainLayout/MainLayout';
import AccountPage from 'page/AccountPage/Account';
import CalendarPage from 'page/CalendarPage/Calendar';
import StatisticsPage from 'page/StatisticsPage/Statistics';

import PrivatRoute from 'PrivateRute';
import { ChosenMonth } from 'components/ChosonMonth/ChosonMonth';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
          >
            <Route path="month/:currentDate" element={<ChosenMonth />} />
            <Route path="day/:currentDate" element={'<ChosenDay />'} />
          </Route>
          <Route
            path="/statistics"
            element={
              <PrivatRoute redirectTo="/login" component={<StatisticsPage />} />
            }
          />
        </Route>
        <Route path="*" element={'<PageNotFound />'} />
      </Routes>
    </div>
  );
};
