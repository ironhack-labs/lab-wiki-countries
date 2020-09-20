import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutApp from './LayoutApp';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import countriesArr from './countries.json';

const R = () => {
  return (
    <div>
      <p>Homeeeeeeeeeeee</p>
    </div>
  );
};
const Login = () => {
  return <p>Login</p>;
};
const Signup = () => {
  return <p>Signup</p>;
};
const Profile = () => {
  return <p>Profile</p>;
};

const Home = () => {
  return (
    <Router>
      <LayoutApp>
        <CountriesList countries={countriesArr} />
        <Switch>
          <Route component={CountryDetails} path="/:cca3" exact />
        </Switch>
      </LayoutApp>
    </Router>
  );
};

export default Home;
