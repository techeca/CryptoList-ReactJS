import * as React from "react";
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

const columns = [
  { id: 'rank', label: 'Rank', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'symbol', label: 'Code', minWidth: 100 },
  {
    id: 'price_usd',
    label: 'Price',
    minWidth: 200,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'market_cap_usd', label: 'Market Cap', minWidth: 100 },
  {
    id: 'total_supply',
    label: 'Total Supply',
    minWidth: 200,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
];

AssetsPresenter.propTypes = {
  assetsResult: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default function AssetsPresenter({ assetsResult, error, loading }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

      return (
        <Container maxWidth='xl'>
        <Paper sx={{ width: '100%', overflow: 'hidden', margin: '30px 0px' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
              <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
              </TableHead>
                <TableBody>
                      {assetsResult
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((assets) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={assets.id}>
                                {columns.map((column) => {
                                  const value = assets[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align}>
                                      {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );

                                })}

                              </TableRow>
                            );
                        })}
               </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={assetsResult.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    );
}
