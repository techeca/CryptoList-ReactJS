import { coinsInfo } from "../../API"; // static is set? by default?
import React, { useState } from "react";
import AssetsPresenter from "./AssetsPresenter";
import TablePagination from '@mui/material/TablePagination';
import Avatar from '@mui/material/Avatar';
import { Number, Currency } from "react-intl-number-format";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default class extends React.Component {
    state = {
    assetsResult: null,
    error: null,
    loading: true,
    currencyUser: null,
    options : {
      selectableRows: 'single',

    },
    columns : [
      {
        name:'id',
        options:{
          display:false
        }
      },
      {
        name:"market_cap_rank",
        label:"Rank"
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
        name:"current_price",
        label:"Price USD",
        options:{
          customBodyRender: (value, tableMeta, updateValue) => {

            const nf = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return (
              <Typography variant='span'>
              {nf.format(value)}
              </Typography>
            );
          }
        }
      },
      {
        name:"price_change_percentage_1h_in_currency",
        label:"1H",
        options:{
          customBodyRender: (value, tableMeta, updateValue) => {

            const nf = new Intl.NumberFormat('en-US', {
              style: 'percent',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return (
              <Typography variant='span' color={value < 0 ? 'red' : 'green'}>
              {nf.format(value)}
              </Typography>
            );
          }
        }
      },
      {
        name:"price_change_percentage_24h_in_currency",
        label:"24H",
        options:{
          customBodyRender: (value, tableMeta, updateValue) => {

            const nf = new Intl.NumberFormat('en-US', {
              style: 'percent',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return (
              <Typography variant='span' color={value < 0 ? 'red' : 'green'}>
              {nf.format(value)}
              </Typography>
            );
          }
        }
      },
      {
        name:"price_change_percentage_7d_in_currency",
        label:"7D",
        options:{
          customBodyRender: (value, tableMeta, updateValue) => {

            const nf = new Intl.NumberFormat('en-US', {
              style: 'percent',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return (
              <Typography variant='span' color={value < 0 ? 'red' : 'green'}>
              {nf.format(value)}
              </Typography>
            );
          }
        }
      },
      {
        name:"market_cap",
        label:"Market Cap",
        options:{
          customBodyRender: (value, tableMeta, updateValue) => {

            const nf = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return nf.format(value);
          }
        }
      }
    ],
  };
  // 1. get the raw data from API server
  // 2. extract speified info at next step (Presenter)
  async componentDidMount() {
    try {
      const { data: assetsResult } = await coinsInfo.coinsInfoDetail();
      this.setState({
        assetsResult,
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
    const { assetsResult, error, loading, columns } = this.state;

    return (
            <AssetsPresenter assetsResult={assetsResult} error={error} loading={loading} columns={columns} />
         );
  }
}
