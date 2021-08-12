import React from 'react';
import { Link } from 'react-router-dom';
import countriesDataJSON from '../countries.json';

const CountryDetails = (props) => {
  const countrieID = props.match.params.cca3;
  console.log(countrieID);

  const countries = [...countriesDataJSON];

  const selectedCountry = countries.find(
    (country) => country.cca3 === props.match.params.cca3
  );

  console.log(selectedCountry);

  return (
    <div style={{ position: 'absolute', top: '60px', right: '30%' }}>
      <div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          {/* <thead></thead> */}
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{selectedCountry.capital[0]}</td>
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
                  {selectedCountry.borders.map((c) => {
                    return (
                      <li>
                        <Link to={'/' + c}>
                          {
                            countries.find((country) => country.cca3 === c).name
                              .common
                          }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetails;
