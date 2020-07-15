import React from 'react'
import { Link } from 'react-router-dom';

const CountryDetail = ({ name, capital, area, borders, countries }) => {
    console.log(name, capital, area, borders, countries);
    return (
      <div class="col-7">
        <h1>{name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
                <td style={{width: '30%'}}>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {borders.map((elm, idx) => <li key={idx}><Link to={`/${elm}`}>{countries.find((item)=>item.cca3 === elm).name.common}</Link></li>)}
            
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default CountryDetail