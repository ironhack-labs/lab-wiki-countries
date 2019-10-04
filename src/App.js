import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./Components/Navbar";
import CountriesList from "./Components/CountriesList";
import CountryDetails from "./Components/CountryDetails";
import { Route } from "react-router-dom";
// import axios from "axios";

class App extends Component {
  state = {
    allCountries: countries,
  };

  // componentDidMount() {
  //   axios.get("https://countries.tech-savvy.tech/countries").then(response => {
  //     console.log(response.data);
  //     this.setState({ allCountries: response.data });
  //   });
  // }


  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.allCountries} />
            <Route
              exact
              path="/:cca3"
              component={(props) => (
                <CountryDetails {...props} countries={this.state.allCountries} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
