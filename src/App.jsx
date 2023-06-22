import { Route, Routes } from 'react-router-dom';

import MainPage from './page/MainPage/MainPage';
import LogIn from 'page/LogIn/LogIn';
import SingUp from 'page/SingUp/SingUp';
import User from 'page/User/User';

// спроба створити gh-pages

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};
