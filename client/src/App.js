import React from "react";
import { makeStyles } from "@material-ui/core";
// components
import Header from "./components/header/Header";
import InstructorsList from "./components/instructorsList/InstructorsList";

const useStyles = makeStyles(() => ({
  appContainer: {
    padding: "3%",
    backgroundColor: "#fdfdfd",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <InstructorsList />
    </div>
  );
}

export default App;
