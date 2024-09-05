import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Quizzes from './Quizzes';
import Announcement from './Announcement';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { getAnnouncements, getQuizzes } from '../store';
import Panel from './Panel';
function Dashboard() {
  const dispatch = useAppDispatch();
  const announcements = useAppSelector(state => state.announcement);
  const quizzes = useAppSelector(state => state.quize);
  useEffect(() => {
    dispatch(getAnnouncements())
    dispatch(getQuizzes())
  }, [])
  return (
    <Grid container spacing={3} >
      <Grid item xs={12}>
      <Panel />
      </Grid>
      <Grid item xs={12} md={8}>
        <Announcement announcements={announcements} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Quizzes quizzes={quizzes} />
      </Grid>
    </Grid>
  );
}
export default Dashboard