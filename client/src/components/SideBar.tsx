import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CampaignIcon from '@mui/icons-material/Campaign';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    boxSizing: 'border-box',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    '& .MuiDrawer-paper': {
      width: 'auto',
    },
  },
}));

const ListItemStyled = styled(ListItemButton)(({ theme }) => ({
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#ffffff !important',
    '& .MuiListItemText-root': {
      color: '#00f2fe',
    },
    '& .MuiListItemIcon-root': {
      color: '#00f2fe', // Change icon color on hover
    },
  },
}));

function SideBar() {
  return (
    <DrawerStyled
      variant="permanent"
      anchor="left"
    >
      <List>
        <div style={{ marginBottom: 15 }}>
          <Link to='/dashboard' style={{ textDecoration: 'none' }}>
            <ListItemStyled>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: '#ffffff' }} />
            </ListItemStyled>
          </Link>
        </div>
        <div style={{ marginBottom: 15 }}>
          <ListItemStyled>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule" sx={{ color: '#ffffff' }} />
          </ListItemStyled>
        </div>
        <div style={{ marginBottom: 15 }}>
          <ListItemStyled>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" sx={{ color: '#ffffff' }} />
          </ListItemStyled>
        </div>
        <div style={{ marginBottom: 15 }}>
          <ListItemStyled>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="GradeBook" sx={{ color: '#ffffff' }} />
          </ListItemStyled>
        </div>
        <div style={{ marginBottom: 15 }}>
          <ListItemStyled>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Performance" sx={{ color: '#ffffff' }} />
          </ListItemStyled>
        </div>
        <div style={{ marginBottom: 15 }}>
          <Link to='/announcements' style={{ textDecoration: 'none' }}>
            <ListItemStyled>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary="Announcement" sx={{ color: '#ffffff' }} />
            </ListItemStyled>
          </Link>
        </div>
      </List>
    </DrawerStyled>
  );
}

export default SideBar;
