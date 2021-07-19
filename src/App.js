import logo from './logo.svg';
import './App.css';

import countries from './countries.json';
import { Route } from 'react-router-dom';

import React from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

class App extends React.Component {
  state = {
    countries: [],
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />
            <Route exact path="/:id" component={CountryDetails} />
            {/* Links in CountriesList use this route to show CountriesDetails component. */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
