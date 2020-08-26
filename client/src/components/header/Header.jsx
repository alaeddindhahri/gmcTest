import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//components
import Modal from "../modal/Modal";

const useStyles = makeStyles(() => ({
  title: {},
  subtitle: {
    display: "flex",
  },
  path: { flexGrow: "1", fontSize: "1rem" },
  addButton: {
    backgroundColor: "#3044ff",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#7b71ff",
    },
  },
}));
export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={12} className={classes.title}>
        <Typography variant="h3">Instructor List</Typography>
      </Grid>
      <Grid item container>
        <Grid item className={classes.path}>
          <Typography>Instructor Management/tunis</Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.addButton}
            onClick={() => handleClickOpen()}
          >
            + Add new instructor
          </Button>
        </Grid>
      </Grid>
      {open ? (
        <Modal
          title="New instructor"
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      ) : null}
    </Grid>
  );
}
