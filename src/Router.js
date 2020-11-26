import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';

// const CountryDetails = () => <h1>ARG</h1>;
const Home = () => <h1>Home</h1>;
const RouterApp = () => {
  return (
    <Router>
      <div className="overflow-auto">
        <Navbar />
      </div>
      <div className="row w-100">
        <div className="col-4 px-0 overflow-auto h-100">
          <CountriesList />
        </div>
        <div className="col-8 overflow-auto">
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={CountryDetails} exact path="/country/:cca3" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RouterApp;
