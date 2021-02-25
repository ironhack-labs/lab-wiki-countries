import React from 'react'
import countries from "./../countries.json"
import { Link } from 'react-router-dom';

function CountryDetails(props) {

    const countryId = props.match.params.id;
    const country = countries.find((countryObj) => countryObj.cca3 === countryId)

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  {country.borders.map((border) => {
                
                    const borderId = border;
                    const borderFound = countries.find((countryObj) => countryObj.cca3 === borderId)

                    return <Link key={country.cca3} className="list-group-item list-group-item-action"
                    to={`/${borderFound.cca3}`}>{borderFound.name.common} {borderFound.flag}
                    </Link>
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails;