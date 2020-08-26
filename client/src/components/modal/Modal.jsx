import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Grid, TextField } from "@material-ui/core";
import { addInstructor } from "../../actions/instructorActions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  formContainer: {
    padding: "5% 20%",
    display: "flex",
  },
  inputContainer: {
    display: "flex",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const [instructor, setInstructor] = useState({
    name: "",
    timeTable: "",
    numberOfTracks: 0,
  });
  const handleChange = (e) => {
    setInstructor({ [e.target.name]: e.target.value });
  };
  const handleSave = (instructor) => {};

  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.formContainer}>
          <form autoComplete="off" style={{ width: "100%" }}>
            <Grid container className={classes.inputContainer}>
              <Grid item lg={4}>
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item lg={4}>
                <TextField
                  id="timeTable"
                  label="Time table"
                  name="timeTable"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item lg={4}>
                <TextField
                  id="numberOfTracks"
                  label="Number of tracks"
                  name="numberOfTracks"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Dialog>
    </div>
  );
}

export default connect(null, { addInstructor })(FullScreenDialog);
