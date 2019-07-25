import React from 'react';
import allCountriesJSON from '../../countries.json';
import './countrydetail.css';
import { Link } from 'react-router-dom';

function CountryDetail(props){

  return (
    <div>
    {allCountriesJSON.map(eachCountry => {
    if (eachCountry.cca3 === props.match.params.countryCode) {
      return(
        <div>
          <h1>{eachCountry.name.common}</h1>
          <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="capital">Capital</td>
                  <td>{eachCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{eachCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {eachCountry.borders.length > 0 &&
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {eachCountry.borders.map(eachBorder => {
                      return(
                        <li>
                          <Link exact to={`${eachBorder}`}>
                          {allCountriesJSON.find(x => x.cca3 === eachBorder).name.common}
                          </Link>
                        </li>
                      );
                    })}
                    </ul>
                  </td>
                </tr>
                }
              </tbody>
            </table>
        </div>
        );
      }
    })}
    </div>
  )
}

export default CountryDetail;