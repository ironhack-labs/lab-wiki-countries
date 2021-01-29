import React from 'react';
import { Link } from "react-router-dom";

export default function CountryDetails(props) {
  const countryCode = props.match.params.id;
  const countryObj = props.countries.find(ele => ele.cca3 === countryCode);
  const {
    name,
    capital,
    area,
    borders
  } = countryObj;

  return (
    <div className="col-7">
      <h1>{name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map(cCode => {
                  const {cca3, name} = props.countries.find(ele => ele.cca3 === cCode);
                  return <li key={`border${cca3}`}><Link to={`/${cca3}`}>
                      {name.common}
                    </Link></li>
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
