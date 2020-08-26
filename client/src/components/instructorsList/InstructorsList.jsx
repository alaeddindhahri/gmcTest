import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
// import {
//   getInstructors,
//   addInstructor,
//   deleteInstructor,
//   updateInstructor,
// } from "../../actions/instructorActions";

const columns = [
  {
    id: "name",
    label: "Name",
    //   minWidth: 170
  },
  {
    id: "subscriptionDate",
    label: "Subscription date",
    //   minWidth: 100
  },
  {
    id: "timeTable",
    label: "Time table",
    // minWidth: 170,
  },
  {
    id: "numberOfTracks",
    label: "Number of tracks",
    // minWidth: 170,
  },
  {
    id: "action",
    label: "Action",
    // minWidth: 170,
  },
];

function createData(name, subscriptionDate, timeTable, numberOfTracks, action) {
  return { name, subscriptionDate, timeTable, numberOfTracks, action };
}

const rows = [
  createData("Bill Billy", Date(), "Fulltime", "1"),
  createData("Mike Miky", Date(), "Part time", "4"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "2%",
  },
  container: {
    minHeight: 600,
  },
});

const StickyHeadTable = () => {
  const instructors = useSelector(
    (state) => state.instructorReducer.instructors
  );
  console.log("StickyHeadTable -> instructors", instructors);
  const classes = useStyles();
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
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {instructors
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                    <TableCell key={columns[4].id}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default StickyHeadTable;
