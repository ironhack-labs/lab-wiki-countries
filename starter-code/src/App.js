import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { CountryList } from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-primary mb-3'>
      <div className='container'>
          WikiCountries
      </div>
    </nav>
      <div className='container'>
        <div className='row'>
          <div
            className='col-5'
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <CountryList />
          </div>
          <Switch>
            <Route exact path='/:id' component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;