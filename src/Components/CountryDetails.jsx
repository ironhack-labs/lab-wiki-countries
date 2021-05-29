import React from 'react';
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetails = (props) => {

  
    const foundCountry = countries.find((country) => {
      return country.cca3 === props.match.params.cca3;
    });
  
    return (
      <div>
 
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {foundCountry.borders.map((border) => {
                        
                        const borderCountry = countries.find((country) => {
                          return country.cca3 === border
                        })
                       
                        return (
                          <li>
                            <Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link>
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

export default CountryDetails
