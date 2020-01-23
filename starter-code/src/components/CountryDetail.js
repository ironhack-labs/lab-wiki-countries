import React from 'react';
import  countries  from '../countries.json'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {

  const getCountry = (cca3) => countries.filter(oneCountry => oneCountry.cca3 === cca3)[0];

  const { params } = props.match;
  const foundCountry = getCountry(params.cca3);
   console.log(foundCountry)
   
  return (
    <div className="details">
    <div class="col-4">
    <h1>{foundCountry.flag}   {foundCountry.name.common}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{foundCountry.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{foundCountry.area}km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
                {foundCountry.borders.map(el => {
                  console.log(el)
                    return (
                        <li>
                        <Link
                        className="list-group-item list-group-item-action"
                        to={`/countries/${el}`}
                      >
                        {el}
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
  </div>
  )
}

export default CountryDetails
