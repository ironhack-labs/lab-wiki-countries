import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";

import CountriesMenu from "./components/CountriesMenu.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
import Home from "./components/Home.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">

        <CountriesMenu />
        
        <Route exact path="/" component={Home} />
        <Route path="/country/:cca3" component={CountryDetail} />

      </div>
    );
  }
}

export default App;
