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
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled } from '@mui/material/styles';
import logo from "./Images/logo.png";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function NavbarBottom() {
  const [value, setValue] = React.useState(0);


const localTheme = localStorage.getItem('theme');

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(63,81,181,0)',
      light: '#ffffff',
      contrastText: '#5c5c5c',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#4caf50',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


    return(
      <ThemeProvider theme={localTheme === 'lightTheme' ? lightTheme : darkTheme}>
        <BottomNavigation sx={{display:{sx:'block', md:'none'}}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </ThemeProvider>
    );
}
