import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Home';
import Assets from './Assets';
import Exchanges from './Exchanges';
import { BrowserRouter, Router, Route, Routes, Link, HashRouter, useNavigate  } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled } from '@mui/material/styles';
import logo from "./Images/logo.png";
import NavbarBottom from './NavbarBottom';

const localTheme = localStorage.getItem('theme');
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(63,81,181,0)',
      light: '#ffffff',
      contrastText: '#5c5c5c',
    },
    secondary: {
      main: '#d32f2f',
    },
    success: {
      main: '#4caf50',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#d32f2f',
    },
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [theme, setTheme] = useState(localTheme);
  const navigate = useNavigate()

  const toggleTheme = () => {
    if (theme === 'lightTheme') {
      setTheme('darkTheme')
      localStorage.setItem('theme', 'darkTheme')
    } else {
      setTheme('lightTheme')
      localStorage.setItem('theme', 'lightTheme')
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return(
      <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <CssBaseline>
        <AppBar position='static' sx={{ boxShadow:0, borderBotton: 1 }}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>

            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <img src={logo} width="48px" />
            </Typography>

              <Box sx={{flexGrow:1, display: {xs:"flex", md:"none"}}}>
                <IconButton
                aria-controls="menu-appbar"
                >
                <MenuIcon />
                </IconButton>
              </Box>

              <Stack spacing={3} direction='row' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button variant='Default' onClick={() => navigate('/')}>Home</Button>
                <Button variant='Default' onClick={() => navigate('/Assets')}>Assets</Button>
                <Button variant='Default' onClick={() => navigate('/Exchanges')}>Exchanges</Button>
              </Stack>

              <Box sx={{ flexGrow: 0}}>
              <Button variant='outlined' color='error' onClick={handleOpenUserMenu}>
                Settings
              </Button>
              <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                keepMounted
                transformOrigin={{  vertical: 'top', horizontal: 'right',  }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Theme</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <FormGroup>
                  <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    label="Theme"
                    onClick={toggleTheme}
                  />
                </FormGroup>
                </MenuItem>
              </Menu>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth='100%'>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Assets' element={<Assets/>}/>
          <Route exact path='/Exchanges' element={<Exchanges/>}/>
        </Routes>

        </Container>
      </CssBaseline>
      <NavbarBottom />
      </ThemeProvider>
    );
}

export default Navbar;
