import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import countries from "../countries.json";

class App extends React.Component {

  state = {
    countries: countries,
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={CountriesList} />
            <Route path="/countries/:countryCCA3" component={CountryDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
