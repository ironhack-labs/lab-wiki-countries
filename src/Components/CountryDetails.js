import React from 'react';
import countries from '../countries';

function CountryDetails(props) {
    let currentCountry = countries.find((country) => {
        return country.cca3 === props.match.params.countryId
    })

    let bordersArr
    const getBorders = () => {
        return currentCountry.borders.map((border) => {
            return (<li>{countries.find((country) => {
                return country.cca3 === border
            }).name.common}
            </li>)
        })
    }

    return (
        <div className="col-7">
            <h1>{currentCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{currentCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {currentCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {getBorders()}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
}

export default CountryDetails;