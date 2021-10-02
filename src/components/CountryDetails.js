import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {

    let selectedCountry = countries.find((country) => country.cca3 === props.match.params.id)

    function findName(cca3) {
        const selectedCountry = countries.find((country) => country.cca3 === cca3);
        return selectedCountry ? (selectedCountry.name.common) : '';
    }

    return (
      <div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="capital">Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {selectedCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {selectedCountry.borders.map(neighbor => {
                    return (
                        <li key={neighbor}>
                        <Link to={'/country/' + neighbor}>
                            {findName(neighbor)}
                        </Link>
                        </li>
                        )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default CountryDetails;

//<li>{neighbor}</li>

