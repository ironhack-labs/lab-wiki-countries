import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import countries from '../../countries.json'
import CountryCard from './CountryCard'
import CountryDetails from '../countrydetail/CountryDetails'


class HomeContainer extends Component {
  state = {countries};


  render() {
    const { countries } = this.state;
    if (!countries) return <p>Loading...</p>;
    return (
      <div>
        <h1>Countries</h1>
        <div className="cartota">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
       
       
        </div>
        

      </div>
    );
  }
}

export default HomeContainer;
