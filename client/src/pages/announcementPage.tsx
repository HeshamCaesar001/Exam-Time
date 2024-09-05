import { Typography, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import {useAppSelector } from '../hooks/hook';

const AnnouncementPage = () => {
    
    const announcements = useAppSelector(state => state.announcement);
  return (
    <Paper sx={{ 
      p: 4, 
      backgroundImage: 'url("/announcement.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100%', 
      color: 'white' // To make text readable on the background
  }}>
      <Typography variant="h6" gutterBottom>
        Announcements
      </Typography>
      <Grid container spacing={1} >

        {announcements.map((announcement: any) => (
          <Grid item md={12}>
            <Card sx={{ maxWidth: "100%" }} key={announcement._id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={announcement.title}
                subheader={new Date(announcement.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })} />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {announcement.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AnnouncementPage;
