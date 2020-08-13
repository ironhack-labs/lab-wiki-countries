import React from 'react';
import countriesJSON from '../../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
    
   const id = props.match.params.id;
   const theCountry = countriesJSON.find(country => country.cca3 === id);

   const bordersIds = theCountry.borders;

   const bordersDataArr = bordersIds
                            .map( borderRef => countriesJSON.find( theBorder => borderRef === theBorder.cca3))
                            .map( (border, index) => { 
                                let route = `/${border.cca3}`
                                return (<li key={index}><Link to={route}>{border.name.official}</Link></li>)
                            })

    const bordersDataHTML = (bordersDataArr.length !== 0)
                            ? (<tr>
                                <td>Borders</td>
                                <td>
                                <ul>
                                {bordersDataArr}
                                </ul>
                                </td>
                            </tr>)
                            : '';

    return (
        <div>
            <h1>{theCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {bordersDataHTML}
              </tbody>
            </table>
        </div>
    )
}

export default CountryDetail
