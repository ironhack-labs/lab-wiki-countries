import React, { Component } from "react";
import { Link } from 'react-router-dom';
import countries from './countries.json';

export default class CountryDetail extends Component {

  render() {

    const countryId = this.props.match.params.id;

    const country = countries.find((country) => {
      return country.cca3 === countryId;
    })

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.length ? country.borders
                    .map((borderingCountryId) => {
                      return (
                        <li key={borderingCountryId} style={{ listStyle: 'none', color: '#000'}}>
                          <Link to={`/${borderingCountryId}`}>
                            {`${[...countries].find(country => borderingCountryId === country.cca3).name.common}`}
                          </Link>
                        </li>);
                  }) : <li key="0">No bordering nations.</li>}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>
                <ul>
                {Object.values(country.languages).map((language, index) => <li key={index}>{language}</li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}