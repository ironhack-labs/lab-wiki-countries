import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries'
import {Route, Link} from 'react-router-dom'
import CountryDetails from './CountryDetails'
//console.log(countries)

class App extends Component {
  state = {
    countries
  }

  showCountries = () => {
    return this.state.countries.map((country, i) => {
      return (
      <Link key={i} 
          to={`/country/${country.flag}`}
          className="list-group-item list-group-item-action">
            {country.name.common}
      </Link>
      )
    })
  }

  render() {
    return (
      <div>


      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {this.showCountries()}
          </div>
        </div>
        {/* <Route exact path="/country/:id" component={CountryDetails} /> */}
        <Route exact path="/country/:id" 
              component= {  (props) =>  <CountryDetails {...props } {...this.state} /> }/> 

      </div>
      </div>
    );
  }
}

export default App;
