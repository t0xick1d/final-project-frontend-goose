import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux-store/Slices/AuthSlice';
import { getUserRefresh } from 'redux-store/Slices/AuthSlice';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  console.log(Component);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefresh = useSelector(getUserRefresh);
  console.log(isLoggedIn);
  console.log(isRefresh);

  const shouldRedirect = !isRefresh && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
