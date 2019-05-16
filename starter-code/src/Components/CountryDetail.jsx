import React, { Component } from 'react';

const CountryDetail = ({ name, capital, area, borders }) => (
  <div class="col-7">
    <h1>{name}</h1>
    <table class="table">
      <thead />
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{capital}</td>
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
            <ul>{borders}</ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CountryDetail;
