import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from '../store/index.js'
import { Navigate } from 'react-router-dom';

export const RequireAuth = (WrappedComponent: React.ComponentType) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (props: any) => {
    return isLoggedIn ? <WrappedComponent {...props} /> : <Navigate to="/" />;
  };
};

