import React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import NavbarBottom from './NavbarBottom';
import Grid from '@mui/material/Grid';

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


export default function Footer(){
  return(
    <ThemeProvider theme={localStorage.getItem('theme') === 'lightTheme' ? lightTheme : darkTheme}>
          <AppBar position="static" color="primary" style={{display:{sx:'none'}}}>
               <Container maxWidth="md">
                 <Toolbar>
                   <Typography variant="body1" color="inherit">
                     © 2022 techeca
                   </Typography>
                 </Toolbar>
               </Container>
          </AppBar>
    </ThemeProvider>
  )
}
