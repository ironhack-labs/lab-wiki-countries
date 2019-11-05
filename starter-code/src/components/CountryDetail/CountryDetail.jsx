import React, { Component } from "react";
import countries from '../../countries.json'
import { Link } from 'react-router-dom'

const CountryDetail = (props) => {

    const getCountry = (id) => {
      const theCountry = oneCountry => {
        
        return oneCountry.cca3 === id;
      }
      return countries.find(theCountry)
    }


    const { params } = props.match;
    const foundCountry = getCountry(params.id, 10)
    console.log(foundCountry);
    
    
    return (
      <div>
        <div class="col-7">
          <h1><strong>{foundCountry.name.common}{foundCountry.flag}</strong></h1>
          <table>
            <thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km²</td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {
                        foundCountry.borders.map((border) => {
                          return (
                            <li>
                              <Link to={`${border}`}>
                                {props.countries.filter((country) => {
                                  return country.cca3 === border
                                })[0].name.common}

                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </thead>
          </table>
        </div>
      </div>

    );
}

export default CountryDetail;
