import React, { useState, useEffect } from "react";
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
//actions
import {
  initUpdateInstructors,
  initAddInstructors,
} from "../../actions/instructorActions";

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
  const {
    title,
    open,
    handleClose,
    initUpdateInstructors,
    initAddInstructors,
  } = props;
  const [instructor, setInstructor] = useState({
    name: "",
    timeTable: "",
    numberOfTracks: 0,
    subscriptionDate: Date(),
  });
  //on mounting, will check if there is an instructor object so it fills the form for edit
  useEffect(() => {
    if (props.instructor) {
      setInstructor(props.instructor);
    }
  }, [props.instructor]);

  const handleChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };

  const classes = useStyles();
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => {
                props.instructor
                  ? initUpdateInstructors(instructor._id, instructor)
                  : initAddInstructors(instructor);
                handleClose();
              }}
            >
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
                  value={instructor.name}
                />
              </Grid>
              <Grid item lg={4}>
                <TextField
                  id="timeTable"
                  label="Time table"
                  name="timeTable"
                  value={instructor.timeTable}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item lg={4}>
                <TextField
                  id="numberOfTracks"
                  label="Number of tracks"
                  name="numberOfTracks"
                  value={instructor.numberOfTracks}
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

const mapDispatchToProps = {
  initUpdateInstructors,
  initAddInstructors,
};

export default connect(null, mapDispatchToProps)(FullScreenDialog);
