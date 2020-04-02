import React from 'react';
import './App.css';
import CountryDetail from "./pages/CountryDetail.js";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Country-Details" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
