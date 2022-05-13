import { exchangeInfo } from "../../API"; // static is set? by default?
import React, { useState } from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import TablePagination from '@mui/material/TablePagination';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default class extends React.Component {
    state = {
    exchangeResult: null,
    error: null,
    loading: true,
    columns : [
      {
        name:'id',
        options:{
          display:false
        }
      },
      {
        name:"trust_score_rank",
        label:"Rank"
      },
      {
        name:"image",
        label: "Logo",
        options:{
          filter: true,
          sort:false,
            customBodyRender: (value, tableMeta, updateValue) => (
                <Avatar src={value} sx={{ width: 48, height: 48 }} />
            )
        }
      },

      {
        name:"name",
        label:"Name"
      },
      {
        name:"trust_score",
        label:"Score"
      },
      {
        name:"country",
        label:"Country"
      },
      {
        name:"url",
        label:"Website",
        options:{
          customBodyRender: (value, tableMeta, updateValue) => (
            <Button variant="outlined" href={value} color="success" sx={{ boxShadow: 0 }}>
              Site
              </Button>
          )
        }
      }
    ],
  };

  async componentDidMount() {
    try {
      const { data: exchangeResult } = await exchangeInfo.exchangeInfoDetail();
      this.setState({
        exchangeResult,
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
    const { exchangeResult, error, loading, columns } = this.state;

    return (
            <ExchangesPresenter exchangeResult={exchangeResult} error={error} loading={loading} columns={columns} />
         );
  }
}
