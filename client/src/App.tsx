import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard'
import HomePage from './pages/homePage';
import { useSelector } from 'react-redux';
import { RequireAuth } from './components/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RootState } from './store';
import { Navigate } from 'react-router-dom';
import AnnouncementPage from './pages/announcementPage'
import Grid from '@mui/material/Grid';

const App = () => {
  const ProtectedDashboard = RequireAuth(Dashboard);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <Router>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <SideBar />
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={3} >
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12} md={12}>
              <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <HomePage />} />
                <Route path="/dashboard" element={<ProtectedDashboard />} />
                <Route path="/announcements" element={<AnnouncementPage />} />
              </Routes>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </Router>

  );
};

export default App;
