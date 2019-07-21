import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import AllCountries from "./components/AllCountries";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <a className="navbar-brand" href="/">
        WikiCountries
      </a>
    </div>
  </nav>
);

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <AllCountries />
      <Switch>
        <Route path="/:id" component={CountryDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
