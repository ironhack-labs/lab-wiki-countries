import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
// import CountryDetail from './Components/CountryDetail';

function CountryDetail(props) {
  let countryDetailed = countries.find((c) => c.cca3 === props.match.params.id);
  console.log(countryDetailed);
  return (
    <div className="border border-rounded">
      <div className="display-3">{countryDetailed.name.common}</div>
      <div className="h4">Capital: {countryDetailed.capital}</div>
      <div className="h4">Area: {countryDetailed.area}</div>
      <div className="list-group-flush">
        Borders:{' '}
        {countryDetailed.borders.map((c) => (
          <li className="list-group-item">
            <Link to={'/countries/' + c}>{c}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default CountryDetail;
