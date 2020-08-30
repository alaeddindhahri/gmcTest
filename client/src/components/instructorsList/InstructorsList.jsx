import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
//components
import Spinner from "../spinner/Spinner";
import Modal from "../modal/Modal";
//actions
import {
  getInstructors,
  deleteInstructor,
} from "../../actions/instructorActions";
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

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "2%",
  },
  container: {
    minHeight: 600,
  },
});

const StickyHeadTable = (props) => {
  const { instructors, isLoading, getInstructors } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getInstructors();
  }, [getInstructors]);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [toUpdateInstructor, setToUpdateInstructor] = useState({});
  const handleSetToUpdateInstructor = (instructor) => {
    setToUpdateInstructor(instructor);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      {isOpen ? (
        <Modal
          title="Update instructor"
          open={isOpen}
          handleClose={handleSetIsOpen}
          instructor={toUpdateInstructor}
        />
      ) : (
        <div>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {isLoading ? (
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <Spinner color="primary" />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                <TableBody>
                  {instructors
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover tabIndex={-1} key={row._id}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id}>
                                {value ? (
                                  value
                                ) : (
                                  <div key={column.id}>
                                    <IconButton
                                      onClick={() => {
                                        handleSetToUpdateInstructor(row);
                                        handleSetIsOpen();
                                      }}
                                    >
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton
                                      onClick={() =>
                                        props.deleteInstructor(row._id)
                                      }
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </div>
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={instructors.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      )}
    </Paper>
  );
};
const mapStateToProps = (state) => ({
  instructors: state.instructorReducer.instructors,
  isLoading: state.instructorReducer.isLoading,
});
const mapDispatchToProps = {
  getInstructors,
  deleteInstructor,
};
export default connect(mapStateToProps, mapDispatchToProps)(StickyHeadTable);
