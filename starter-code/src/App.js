import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import CountrySelector from './CountrySelector';
import CountryDetail from './CountryDetail';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
        <CountrySelector />
        <Switch>
          {/* <Route exact path="/" component={CountrySelector} /> */}
          <Route exact path="/:id" component={CountryDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
