import React from 'react';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Link } from 'react-router-dom';

const CountryDetail = (props) => {
  // Gets the country based on the URL
  // mathc.params is a property of the Router object that is made
  // id actually grabs that param (e.g. AGO) and finds the country that way
  // Once it finds the appropiate country it renders what is below for the given country
  let country = countries.find((eachCountry) => {
    return eachCountry.cca3 === props.match.params.id;
  });

  //lets you find name so it prints it in borders list
  function determineName(code) {
    let c = countries.find((e) => {
      return e.cca3 === code;
    });
    return c.name.common;
  }

  function listBorders() {
    return [...country.borders].map((b) => {
      return (
        <li key={b}>
          <Link to={'/' + b}>{determineName(b)}</Link>
        </li>
      );
    });
  }

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{listBorders()}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
