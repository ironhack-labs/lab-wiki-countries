import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CountryDetail}></Route>
        <Route path="/:country" component={CountryDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
