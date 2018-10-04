import React, { Component } from "react";
//import { Link, Route } from 'react-router-dom';
//import countries from '../countries.json';
// import CountryDetail from './CountryDetail'



class Country extends Component {
  render() {
    const { pais } = this.props;
    return (
      <div>
        <table>
          <tr><a href={pais.cca3}>{pais.name.common}</a></tr>
        </table>
      </div >
    );
  }
}
export default Country;
