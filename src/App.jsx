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
// import { ChosedMonth } from 'components/ChosedMonth/ChosedMonth';

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
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/account"
            element={
              // має бути login але я додав account щоб можна було зайти на сторінку
              <PrivateRoute redirectTo="/login" component={<AccountPage />} />
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<StatisticsPage />}
              />
            }
          />
        </Route>
        {/* <Route path="month/:currentDate" element={<ChosedMonth />} />
        <Route path="day/:currentDate" element={<ChosenDay />} /> */}
      </Routes>
    </div>
  );
};
