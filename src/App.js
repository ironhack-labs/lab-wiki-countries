import React from 'react';
import NavbarComponent from './components/NavbarComponent/Navbar.component';
import CountriesListComponent from './components/CountriesList.component';
import CountryDetailsComponent from './components/CountryDetails.component'
import Countries from './countries.json';
import { Switch, Route, Link, useParams } from "react-router-dom";
import './App.css';

class App extends React.Component {
  state = {
    countries: Countries
  }
  render() {
  console.log(this.state)
  console.log(this.getCountryByCca3())
    return (
      <div className="main-div">
  
        <NavbarComponent />

  
        <div className="row">
          <div className="col-5">
          <CountriesListComponent countries={this.state.countries} />
          </div>
          <div className="col-7">
          <Switch>
          <Route path="/:cca3" children={<CountryDetailsComponent getCountry={this.getCountryByCca3} />} />
        </Switch>
          </div>
        </div>
  
      </div>
    );
  }

getCountryByCca3(cca3) {
  return Countries.find((country) => {
    return country.cca3 === cca3
  }) 
}
}

export default App;
//..................................................................//



