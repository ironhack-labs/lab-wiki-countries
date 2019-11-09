import React from "react";
import "./App.css";
import DisplayCountries from "./components/DisplayCountries";
import Info from "./components/Info";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <header className="title">Wiki Countries</header>
      </div>

      <div className="general-container">
        <div className="row">
          <div className="countries-container col-5">
            <DisplayCountries />
          </div>
          <Switch>
            <Route exact path="/detail/:id" component={Info} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
