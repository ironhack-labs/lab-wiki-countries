import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import CountryDetails from './components/CountryDetails.js';
import { Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {

state = {
  countries : []
}

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar />
        </header>
        <body>
          <Route path='/:theID' component={CountryDetails}></Route>
        </body>     
      </div>
    );
  };
};

export default App;
