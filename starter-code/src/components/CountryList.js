import React, { Component } from "react";
import Countries from "../countries.json";
import CountryDetail from "./CountryDetail.js";
import {NavLink, Link} from "react-router-dom"

export default class CountryList extends Component {
  countryList = () => {
    return Countries.map((country, i) => {
      //console.log(country);
      return   <Link key={i} to={`/${country.cca2}` } activeclassname="active" className="list-group-item list-group-item-action">{country.flag}{country.name.common}</Link>
    })
  };

  render() {
    //console.log(this.countryList());

    return (
      <div>
            {this.countryList()}
      </div>
    );
  }
}
