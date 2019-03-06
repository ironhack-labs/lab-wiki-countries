import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import '../App.css';

const countryDetails = (props) => {
 
 let theCountry = countries.find((country) => {
      return country.cca3 === props.match.params.id
 });

 let theBorders = theCountry.borders.map((border) => {
    console.log(theCountry.cca3)
      return (
        <li><Link to={`/${border}`} key={theCountry.cca3}> {border} </Link></li>
      )
 });

  return(
    <div className="col-7">
        <h1>{theCountry.name.common}</h1>

        <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="captial">Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {theBorders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

    </div>
  )
}

export default countryDetails;