import React, { Component } from "react";
import countries from "../countries.json";
import CountryListLink from './CountryListLink'

export default class CountryList extends Component {
  render() {
    return (
      <nav className="column is-one-third panel" style={{overflowY: "scroll", height: "100vh"}}>
        {countries.map(e => <CountryListLink cca3={e.cca3} key={e.cca3}/>)}
      </nav>
    );
  }
}
