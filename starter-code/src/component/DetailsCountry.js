import React from 'react';
import { NavLink } from 'react-router-dom';

function DetailsCountry({country, borders}) {
  return (
    <div className="col-7">
      <h1>{country.translations.spa.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ 'width': '30%' }}><strong>Capital</strong></td>
            <td>{country.translations.spa.official}</td>
          </tr>
          <tr>
            <td><strong>Area</strong></td>
            <td>{country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td><strong>Borders</strong></td>
            <td>
              <ul className="text-left">
                {borders.map((border, i) => (
                <li key={i}><NavLink to={`/${border.cca3}`}>{border.name}</NavLink></li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};


export default DetailsCountry