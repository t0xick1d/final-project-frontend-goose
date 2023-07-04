import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainPage from './page/MainPage/MainPage';
import LoginPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';
import MainLayout from 'page/MainLayout/MainLayout';
import AccountPage from 'page/AccountPage/Account';
import CalendarPage from 'page/CalendarPage/Calendar';
import StatisticsPage from 'page/StatisticsPage/Statistics';
import VerificationPage from 'page/VerificationPage/VerificationPage';
import Page404 from 'page/Page404/Page404';

import PrivateRoute from 'PrivateRoute';
import RestrictedRoute from 'RestrictedRoute';

import Spiner from './components/Spiner/Spiner';

import { fetchCurrentUser } from 'redux-store/AuthOperations/AuthOperations';
import { ChosedMonth } from 'components/ChosedMonth/ChosedMonth';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay/ChoosedDay';
// Залишив в такому вигляді бо не знав звідки брати
// import { ChosenDay } from 'components/ChoosedDay/ButtonAddTask/ButtonAddTask';

export const App = () => {
  const dispatch = useDispatch();
  // const isRefresh = useSelector(getUserRefresh);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
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
          >
            <Route path="/account" element={<AccountPage />} />
            <Route path="/calendar" element={<CalendarPage />}>
              <Route path="month/:currentDate" element={<ChosedMonth />} />
              <Route path="day/:currentDate" element={<ChoosedDay />} />
            </Route>
            <Route path="/statistics" element={<StatisticsPage />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
};
