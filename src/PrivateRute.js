import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivatRoute({
  component: Component,
  redirectTo = '/',
}) {
  const shoudRedirect = true;

  return shoudRedirect ? Component : <Navigate to={redirectTo} />;
}
