import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner(props) {
  /* Takes props color,size */
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      color: props.color,
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color={props.color} size={props.size} />
    </div>
  );
}
