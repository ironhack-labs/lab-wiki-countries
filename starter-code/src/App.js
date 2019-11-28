import React from 'react';
import './App.css';
import CountryDetail from "./CountryDetail"
import Countries from "./Home"
import {Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <div id="root">
    <div>
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
   <Switch>
   <div className="container">
<div className="row">

   <Countries />
   <Route exact path="/:id" component={CountryDetail} />
</div>
</div>
   </Switch>
    </div>
    </div>
    </div>
  );
}

export default App;
