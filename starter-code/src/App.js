import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import CountryLink from './components/CountryLink';
import Navbar from './components/Navbar';
import countries from './countries.json'

const App = () => {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
            {
              countries.map(country => <CountryLink countries={country} />)
            }
          </div>
        </div>
        <div className="col-7">
          <Switch>
            <Route exact path='/:cca3' component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
