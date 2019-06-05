import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Switch , Route } from 'react-router-dom';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
         <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/:cca3' component={ CountryDetail } />
        </Switch>
      </div>
    );
  }
}

export default App;
