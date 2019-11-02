import React from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <Home countries={countries} />
          <Switch>
            <Route exact path ='/:cca3' render={(props) => <CountryDetail {...props} countries={countries} />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
