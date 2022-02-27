import React from 'react';
import './CountryDetails.css';
import { useParams } from 'react-router-dom';

function CountryDetails(prop) {
  let { countryCode } = useParams();
  return (
    <div className="col-7">
    <h1>{prop?.name?.common}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: '30%'}}>Capital</td>
          <td>{prop?.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {prop.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {
                prop?.borders?.map( (element, index) => {
                    return (
                    <li><a href="/{countryCode}">{countryCode}</a></li>
                  )}
                )
              }
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default CountryDetails;