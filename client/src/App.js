import React from "react";
import { Provider } from "react-redux";
import Store from "./store/store";
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
    <Provider store={Store}>
      <div className={classes.appContainer}>
        <Header />
        <InstructorsList />
      </div>
    </Provider>
  );
}

export default App;
