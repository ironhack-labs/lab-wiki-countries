//we will render this in the Route, and it will receive the country code via params in theURL
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CountryDetails(props){
// console.log(props.countries[0].capital)
const {id} = useParams()
const country = props.countries.find(country=>country.alpha3Code === id)
console.log(country)

    return(
        <div className="col-7">
        <h1>{id}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
          <tr>
          <td>Flag</td>
          <td> <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag of the country'/> </td>
          </tr>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {country.area}m
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td><ul>{country.borders.map(border => (
                                <li>
                                    <Link to={`/${border}`}>
                                        {props.countries.find(country => country.alpha3Code === border).name.common}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}