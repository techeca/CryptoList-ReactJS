import React from "react";
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
import { Number, Currency } from "react-intl-number-format";
import AssetsContDet from './AssetsContDet';

const options = {
  filter: false,
  selectableRowsHeader: false,
  selectableRows: 'none',
  expandableRows: true,
  expandableRowsHeader: false,
  expandableRowsOnClick: true,
  isRowExpandable: (dataIndex, expandedRows) => {
        {/*if (dataIndex === 3 || dataIndex === 4) return false;*/}
        // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
        if (expandedRows.data.length == 1 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
        return true;
      },
  renderExpandableRow: (rowData, rowMeta) => {
    const colSpan = rowData.length + 1;
    const loading = true;
    const isee = rowMeta.rowIndex;


    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <AssetsContDet assetsId={isee} />
          {localStorage.setItem('itemSee', isee)}
          {localStorage.setItem('itemSeeId', rowData[0])}
        </TableCell>
      </TableRow>
    );
  }
};

const AssetsPresenter = ({ assetsResult, error, loading, columns }) =>
  loading ? (
    <Loader />
  ) : (

    <Container maxWidth='xl'>
      <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden', margin: '50px 0px' }} variant="outlined" square >
        <MUIDataTable
          title={"COINS"}
          data={assetsResult}
          columns={columns}
          options={options}
        />
      </Paper>
    </Container>

  );
export default AssetsPresenter;
