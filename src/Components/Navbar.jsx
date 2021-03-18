import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import CountriesList from './CountriesList';
import CountryDetails from "./CountryDetails";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">WikiCountries</Link>
            {/* <CountriesList/> */}
            {/* <Switch>
        <Route
          path="/countries/:cca3"
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />;
          }}
        />
      </Switch> */}
        </nav>
    )
}

export default Navbar

