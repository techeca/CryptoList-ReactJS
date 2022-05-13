import React, { useState, useEffect } from "react";
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
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Number, Currency } from "react-intl-number-format";
import { coinsDetail } from "../../API";
import axios from 'axios';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import Chart1 from './Chart1';
import SvgIcon from '@mui/material/SvgIcon';
import GroupsIcon from '@mui/icons-material/Groups';
import ComputerIcon from '@mui/icons-material/Computer';
import LockIcon from '@mui/icons-material/Lock';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

{/*const tempData = JSON.stringify(!!coinResult && coinResult)}
{const tempJson = JSON.parse(!!tempData && tempData)}
{const kis = Object.keys(!!coinResult && coinResult)}
{const tempCoin = assetsId*/}

{/*const AssetsDetails = ({assetsId}) =>
(
    <Container>
    <a>{assetsId}</a>
    {assetsResult.map((item) => (
      <h5 key={item.id}>{`${item.name}`}</h5>
    ))}
    </Container>
  );*/}


  const AssetsDetails2 = ({ coinResult, error, loading, assetsId }) =>
    loading ? (
      <Loader />
    ) : (
    <>
      <Box >

        {console.log(coinResult.market_data)}

        <Grid container>
          <Grid xs={4} md={4}>
            <Typography variant='span' component="h1">
              {coinResult.name}
            </Typography>
            <Typography variant='span' component="h5">
              {coinResult.symbol}
            </Typography>
              <Grid sx={{mt: 3}}>
              <Box sx={{display: 'flex','& > :not(style)': {pt:2, pl:0 ,mr: 2, width: '100%',
                height: 185,},}}>
                <Paper elevation={2} variation='rounded' >

                <Grid container>
                  <Grid xs={3} md={3} sx={{pl:2}}>
                    <GroupsIcon />
                  </Grid>
                    <Grid xs={9} md={9} sx={{pt:0.3}}>
                      <Typography variant='span' component="span">
                      Community score: {coinResult.community_score}
                      </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={3} md={3} sx={{pl:2}}>
                    <ComputerIcon />
                  </Grid>
                    <Grid xs={9} md={9} sx={{pt:0.3}}>
                      <Typography variant='span' component="span">
                      Developer score: {coinResult.developer_score}
                      </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={3} md={3} sx={{pl:2}}>
                    <CakeIcon />
                  </Grid>
                    <Grid xs={9} md={9} sx={{pt:0.3}}>
                      <Typography variant='span' component="span">
                      Genesis date: {coinResult.genesis_date}
                      </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={3} md={3} sx={{pl:2}}>
                    <LockIcon />
                  </Grid>
                    <Grid xs={9} md={9} sx={{pt:0.3}}>
                      <Typography variant='span' component="span">
                      Algorithm: {coinResult.hashing_algorithm}
                      </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={3} md={3} sx={{pl:2}}>
                    <MonetizationOnIcon />
                  </Grid>

                    <Grid xs={9} md={9} sx={{pt:0.3, display:'flex'}}>
                          Supply:
                        <Box>
                        <Typography variant='span' component="span" sx={{justifyContent: 'flex-end'}}>
                          {coinResult.market_data.circulating_supply}
                        </Typography>
                        </Box>

                    </Grid>
                </Grid>

                </Paper>
              </Box>
                {/*<Avatar src={coinResult.image.thumb} variant='square' />*/}

              </Grid>
          </Grid>




          <Grid xs={8} md={8} >
            {localStorage.setItem('graph7d', coinResult.market_data.sparkline_7d.price)}
            <Chart1 />

          </Grid>

        </Grid>

      </Box>
    </>

);

export default AssetsDetails2;
