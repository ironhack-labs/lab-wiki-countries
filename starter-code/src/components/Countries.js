import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../countries.json';

export default class Countrie extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-group">
          {data.map((country) => {
            return(
              <div> 
                <Link to={`/${country.cca3}`} key={country.name.common} className="list-group-item list-group-item-action"><span>{country.flag}</span> {country.name.common}</Link>
              </div>
                ) 
          })}
        </div>
      </div>
    )
  }
}
