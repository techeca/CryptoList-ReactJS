import React from "react";
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
import clsx from 'clsx';
import Link from '@mui/material/Link';

const options = {
  filter: false,
  selectableRowsHeader: false,
  isRowSelectable: false,
};

const ExchangesPresenter = ({ exchangeResult, error, loading, columns }) =>
  loading ? (
    <Loader />
  ) : (

    <Container maxWidth='xl'>
      <Paper sx={{ width: '100%', overflow: 'hidden', margin: '50px 0px' }}>
      <MUIDataTable
        title={"EXCHANGES"}
        data={exchangeResult}
        columns={columns}
        options={options}
      />
      </Paper>

    </Container>

  );

export default ExchangesPresenter;
