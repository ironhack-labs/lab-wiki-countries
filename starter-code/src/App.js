import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";
import ListOfcountries from "./components/ListOfCountries";
import CountryDetail from "./components/CountryDetail";
import Routes from "./Routes";

class App extends Component {
  state = {
    activeCca3: ""
  }
  
  clickOnCountry = (cca3) => {
    this.setState({ activeCca3 : cca3 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">WikiCountries</header>
        {/* Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width  */}
        <div className="row">
          <div className="col-5 scrollbar-light-blue">
            <div className="list-group">
              <ListOfcountries countries={countries}
              activeCca3={this.state.activeCca3} 
              clickOnCountry={this.clickOnCountry}
              />
            </div>
          </div>
          <div className="col-7">
            <Routes clickOnCountry={this.clickOnCountry} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
