import logo from './logo.svg';
import './App.css';

import countries from './countries.json';

import React from "react";
import Navbar from "./Navbar";
import CountriesList from "./CountriesList";
// import CountryDetails from "./CountryDetails";

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
            {/* <Route exact path="/:id" component={CountryDetails} /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
