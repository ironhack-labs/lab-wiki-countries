import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesDetail(props) {
    let country = countries.find(country => country.cca3 === props.match.params.id)
    return (
      <div className="countriesdetail">
        <h1 >{country.name.common}</h1>
        <table className="table">
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{country.capital[0]}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area} km²</td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map(border=> {
                                let borderCountry = countries.find(country => country.cca3 === border);
                                return(
                                    <li><Link to={`/country/${border}`}>{borderCountry.name.common}</Link></li>
                                ) 
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    );
}
  
export default CountriesDetail;