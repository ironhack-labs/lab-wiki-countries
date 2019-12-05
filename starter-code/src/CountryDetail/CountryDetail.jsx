import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countryList from '../countries.json';
import './countryDetail.scss';

const CountryDetail = props => {  
  const listOfCountries = [...countryList];

  const getCountry = listOfCountries.find(country => {
    return country.cca3 === props.match.params.id
  });

  const retrieveCountryFullName = str => {
    const test = listOfCountries.find(country => {
      return country.cca3 === str; 
    });
    return test.name.common; 
  };  
  
  const borders = getCountry.borders.map((country, index )=> {
    return <li key={index}><Link key={index} to={country}>{retrieveCountryFullName(country)}</Link></li>
  });

  return (
/*     <div className="country-detail">
      <h1>{getCountry.name.common}</h1>
      <p>Capital: {getCountry.capital}</p>
      <p>Area: {getCountry.area}</p>
      <p>Borders</p>{borders}
    </div> */

    <table className="table">
    <thead>
      <tr>
        <th scope="col"><h1>{getCountry.name.common}</h1></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Capital</th>
        <td>{getCountry.capital}</td>
      </tr>
      <tr>
        <th scope="row">Area</th>
        <td>{getCountry.area}</td>
      </tr>
      <tr>
        <th scope="row">Borders</th>
        <td>{borders}</td>
      </tr>
    </tbody>
    </table>
  )
}

export default CountryDetail
