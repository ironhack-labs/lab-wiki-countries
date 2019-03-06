import React, { Component } from 'react';
import Card from './Card';
import countries from '../countries.json';

class CountriesList extends Component {
  render() {
    console.log(countries);
    return (
      <div className="col-5 overflow">
        <div className="list-group">
          {countries.map((oneCountry, index) => {
            return <Card key={index} {...oneCountry} />;
          })}
        </div>
      </div>
    );
  }
}
export default CountriesList;
