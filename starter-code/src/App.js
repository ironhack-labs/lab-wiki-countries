import React from 'react';
import './App.css';
import {Router, Switch} from "react-router-dom";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <CountryList/>
      </div>
    )
  }
};

export default App
