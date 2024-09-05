import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../store';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>LogIn Please so you can access Your Dashboard</h1>
    </div>
  );
};

export default HomePage;
