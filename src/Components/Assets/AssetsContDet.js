import { coinsDetail } from "../../API"; // static is set? by default?
import React, { useState, useEffect, Component } from "react";
import AssetsDetails from "./AssetsDetails";
import TablePagination from '@mui/material/TablePagination';
import Avatar from '@mui/material/Avatar';
import { Number, Currency } from "react-intl-number-format";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

export default class extends React.Component {
    state = {
    coinResult: null,
    error: null,
    loading: true,
    assetsId: localStorage.getItem('itemSeeId'),
    currencyUser: null,
    columns : [
      {
        name:'id',
        options:{
          display:false
        }
      },
      {
        name:"image",
        label: "Logo",
        options:{
          filter: false,
          sort:false,
            customBodyRender: (value, tableMeta, updateValue) => (
                <Avatar src={value} variant='square' sx={{ width: 40, height: 40 }} />
            )
        }
      },
      {
        name:"name",
        label:"Name",
        option:{
          customBodyRender: (value, tableMeta, updateValue) => (
            <Typography variant='span'>
              {value}
            </Typography>
          )
        }
      },
      {
        name:"localization",
        label:"cats"
      }
    ],
  };

  // 1. get the raw data from API server
  // 2. extract speified info at next step (Presenter)
  async componentDidMount() {
    try {
      var paramns = localStorage.getItem('itemSeeId');
      const { data: coinResult } = await axios.get(`https://api.coingecko.com/api/v3/coins/${paramns}?sparkline=true` );
      this.setState({
        coinResult,
      });

    } catch {
      this.setState({
        error: "Can't find Price Information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { coinResult, error, loading, columns, assetsId } = this.state;

    return (
            <AssetsDetails coinResult={coinResult} error={error} loading={loading} columns={columns} assetsId={assetsId} />
         );
  }
}
