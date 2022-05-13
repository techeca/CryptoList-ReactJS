import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
<BrowserRouter basename='/CryptoList-ReactJS'>
      <App />
  </BrowserRouter>  ,
  document.getElementById('root')
);
