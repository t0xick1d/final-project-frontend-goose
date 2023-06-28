import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainPage from './page/MainPage/MainPage';
import LoginPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';
import MainLayout from 'page/MainLayout/MainLayout';
import AccountPage from 'page/AccountPage/Account';
import CalendarPage from 'page/CalendarPage/Calendar';
import StatisticsPage from 'page/StatisticsPage/Statistics';
import VerificationPage from 'page/VerificationPage/VerificationPage';

import PrivateRoute from 'PrivateRoute';
import RestrictedRoute from 'RestrictedRoute';

import { fetchCurrentUser } from 'redux-store/AuthOperations/AuthOperations';
import { ChosedMonth } from 'components/ChosedMonth/ChosedMonth';
// Залишив в такому вигляді бо не знав звідки брати
// import { ChosenDay } from 'components/ChoosedDay/ButtonAddTask/ButtonAddTask';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/account" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/account"
              component={<RegisterPage />}
            />
          }
        />
        <Route path="/register/:token" element={<VerificationPage />} />;
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login" component={<MainLayout />} />
          }
          // <PrivateRoute redirectTo="/login" component={} />
        >
          <Route path="/account" element={<AccountPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/calendar" element={<CalendarPage />}>
            <Route path="month/:currentDate" element={<ChosedMonth />} />
            <Route path="day/:currentDate" element={<div>ChoseDay</div>} />
          </Route>
        </Route>
        <Route
          path="/statistics"
          element={
            <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
          }
        />
      </Routes>
    </div>
  );
};