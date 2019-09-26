import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className="page-wrapper">
      <CountryList />
      <Switch>
        <Route exact path="/country-detail/:id" component={CountryDetail} />;
      </Switch>
    </div>
  );
}

export default App;
