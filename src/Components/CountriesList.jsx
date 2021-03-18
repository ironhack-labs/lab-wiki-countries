import React, { Component } from 'react';
import CountryList from './../countries.json';
import { Link } from "react-router-dom";

export class CountriesList extends Component {
  render() {
    return (
      <div>
            <div style={{maxHeight: "90vh", margin: 30, overflow: "scroll"}}>
              <div className="list-group">
              {CountryList.map( (country, index) => {
                return(
                <Link key={index} className="list-group-item list-group-item-action" to={`/${country.ccn3}`}>
                 <span style={{marginRight: 20}}>{country.flag}</span><span>{country.name.official}</span>
                </Link>)})}
              </div>
            </div>
      </div>
    );
  }
}

export default CountriesList;
