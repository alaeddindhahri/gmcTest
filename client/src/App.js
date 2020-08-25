import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={}>
      <BrowserRouter>
        <div className="App"></div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
