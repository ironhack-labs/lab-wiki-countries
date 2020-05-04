import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/country/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
