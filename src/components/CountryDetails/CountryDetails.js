import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './CountryDetails.css';

const CountryDetails = (props) => {
  const country = props.countries.filter(
    (el) => el.name.common === props.match.params.id
  );

  const capital = country.map((el) => el.capital[0]);
  const area = country.map((el) => el.area);
  const borders = country.map((el) => el.borders);

  console.log('props:', borders);

  return (
    <div className="col-7">
      <h1>{props.match.params.id}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area[0]}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {borders[0].map((el) => (
                <Link to={`/${el}`} style={{ marginRight: '1em' }}>
                  {el}
                </Link>
              ))}

              {/* <Link to={`/${el.name.common}`}>{el.name.common}</Link> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
