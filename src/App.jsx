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

import { fetchCurrentUser } from 'redux-store/AuthOperations/AuthOperations';


export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [dispatch])

    return (
      <div>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/:token" element={<VerificationPage />} />;
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/account"
              element={
                // має бути login але я додав account щоб можна було зайти на сторінку
                <PrivateRoute
                  redirectTo="/account"
                  component={<AccountPage />}
                />
              }
            />
            <Route
              path="/calendar"
              element={
                // має бути login але я додав calendar щоб можна було зайти на сторінку
                <PrivateRoute
                  redirectTo="/calendar"
                  component={<CalendarPage />}
                />
              }
            />
            <Route
              path="/statistics"
              element={
                // має бути login але я додав statistics щоб можна було зайти на сторінку
                <PrivateRoute
                  redirectTo="/statistics"
                  component={<StatisticsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
};
