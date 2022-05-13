import React, { useState } from 'react';
import PropTypes from "prop-types";
import Section from "../Section";
import Loader from "../Loader";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MUIDataTable from "mui-datatables";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logoW from '../Images/coinw.png';
import logoB from '../Images/coinb.png';
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import '../../index.css';
import bgb from '../Images/bgb.png';
import Fade from '@mui/material/Fade';
import { TransitionGroup } from 'react-transition-group';
import Link from '@mui/material/Link';
import ButtonEx from './buttonex';
import Avatar from '@mui/material/Avatar';
import BtcGif from '../Images/btcgif.gif';
import examp from '../Images/example.png';
import waves from '../Images/waves.svg';
import back1 from '../Images/back1.svg';
import back2 from '../Images/back2.svg';

const HomePresenter = ({ assetsResult, error, loading, columns }) =>
  loading ? (
    <Loader />
  ) : (
    <Container width='100%' sx={{}}>
    <Paper elevation={1} sx={{}} style={{backgroundImage: `url(${waves})`, width:'100%', height:'auto', backgroundPosition:'bottom', backgroundRepeat: 'no-repeat'}}>
      <Grid container sx={{backgroundColor:'', align: 'center' , display:{md:'flex', xs:'flex'}, height:'90vh'}} >
          <Grid item xs={12} md={6} sx={{my:'auto', textAlign:'center'}}>
              <Fade in='true' {...{ timeout: 3000 }}><Typography variant="h4" component="div" sx={{my:'auto'}}>
                FIND
              </Typography>
              </Fade>
              <Fade in='true' timeout={4000}>
              <Typography variant='h5' component="div">
                COINS & EXCHANGES
              </Typography>
              </Fade>
              <Fade in='true' {...{ timeout: 6000}}>
              <Typography variant='subtittle' component='div'>
                Details of different Crypto Coins and Exchanges.
              </Typography>
              </Fade>
          </Grid>

          <Grid item xs={12} md={0} sx={{mt: -6, pr:6, justifyContent:'center', display: {xs:'flex', md:'none'}}}>
            <Fade in='true' timeout={7000}>
            <img src={BtcGif} width='200px' height='200px'/>
            </Fade>
          </Grid>

          <Grid item xs={0} md={6} sx={{my:'auto', display:{xs:'none', md:'block'}}}>

            <Grid sx={{}}>
            </Grid>
            <Grid sx={{display:'flex'}}>

            </Grid>
            <Fade in='true' {...{ timeout: 7000}}>
            <Grid sx={{display:'flex'}}>
              <img src={examp} width='100%' height='auto' />
            </Grid>
            </Fade>
          </Grid>
          <Fade in='true' {...{ timeout: 8000}}>
          <Box sx={{mx:'auto'}}>
                <IconButton sx={{my:'auto', display:'flex'}} href='#fTopic' aria-label='continue' onClick={e => {
                  let fTopic = document.getElementById('fTopic');
                  e.preventDefault();
                  fTopic && fTopic.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState('fTopic', 'fTopic', '#fTopic')
                }} >
                  <KeyboardArrowDownIcon sx={{fontSize:40}} />
                </IconButton>
          </Box>
          </Fade>


      </Grid>
      </Paper>

    <div id='fTopic'></div>

    <Paper sx={{my:3, p:2, pr:6}}>
      <Grid container spacing={0} sx={{ height:'95vh', justifyContent:'center', display: {xs:'block', md:'flex'}}}>
          <Grid item sx={{my:'auto', border:0,  borderColor:''}} xs={12} md={5} >
            <Paper elevation={6} sx={{m:2, border:1, borderColor:'gray'}} style={{backgroundImage: `url(${back1})`, width:'100%', height:'auto', backgroundPosition:'bottom', backgroundRepeat: 'no-repeat'}}>
              <Box sx={{border:0, m:2, p:0}}>
              </Box>

              <Box sx={{border:0, m:0, p:0, justifyContent:'center', display:'flex'}}>
                <img src={localStorage.getItem('theme') == 'darkTheme' ? logoW:logoB} alt='logow' width='150px'/>
              </Box>

              <Box sx={{border:0, m:6, p:0, textAlign:'center'}}>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              </Box>

              <Box sx={{border:0, m:2, pb:'20%', justifyContent:'center', display:'flex'}}>
                <Button href='./Exchanges' variant='outlined'>Prueba</Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item sx={{my:'auto'}} xs={12} md={1}>
          </Grid>

          <Grid item sx={{my:'auto', border:0,  borderColor:''}} xs={12} md={5} >
            <Paper elevation={6} sx={{m:2, border:1, borderColor:'gray'}} style={{backgroundImage: `url(${back2})`, width:'100%', height:'auto', backgroundPosition:'bottom', backgroundRepeat: 'no-repeat'}}>
              <Box sx={{border:0, m:2, p:0}}>
              </Box>

              <Box sx={{border:0, m:0, p:0, justifyContent:'center', display:'flex'}}>
                <img src={localStorage.getItem('theme') == 'darkTheme' ? logoW:logoB} alt='logow' width='150px'/>
              </Box>

              <Box sx={{border:0, m:6, p:0, textAlign:'center'}}>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              </Box>

              <Box sx={{border:0, m:2, pb:'20%', justifyContent:'center', display:'flex'}}>
                <Button href='./Exchanges' variant='outlined' color='secondary' >Prueba</Button>
              </Box>
            </Paper>
          </Grid>

          </Grid>
        </Paper>
      </Container>
  )

export default HomePresenter;
