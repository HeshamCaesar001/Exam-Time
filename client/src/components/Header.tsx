import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { Button } from '@mui/material';
import { login, logout } from '../store';
function Header() {
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useAppSelector(state => {
    return state.auth
  })
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' style={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 700,
          }}>
            <Typography
              variant="h6"
              noWrap
              component="h2"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Welcome
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Link to='/' style={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}>
              <Typography
                variant="h5"
                noWrap
                component="h2"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Welcome
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {isLoggedIn ? <IconButton sx={{ p: 0 }} onClick={() => dispatch(logout())}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> : <Button variant="contained" color="primary" onClick={() => dispatch(login())}>
                LogIn
              </Button>}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
