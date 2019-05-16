import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const CountryDetail = ({ countries = [], match = {} }) => {
  const countryCode = match.params.countryCode;
  const country = countries.find(country => country.cca3 === countryCode);
  const { name: { common } = {}, capital = [], area, borders = [] } = country;
  return (
    <div className="col-7">
      <h1>{common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map(border => (
                  <li key={border}>{border}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(CountryDetail);
