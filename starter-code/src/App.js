import React from 'react';
import './App.css';
import {Link, Route, Switch } from 'react-router-dom';
import CountriesWiki from './pages/CountriesWiki';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
          <CountriesWiki/>
      </div>
    );
  }
}

export default App;
