import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux-store/Slices/AuthSlice';
// import { getUserRefresh } from 'redux-store/Slices/AuthSlice';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const isRefresh = useSelector(getUserRefresh);

  //const shouldRedirect = !isRefresh && !isLoggedIn;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
