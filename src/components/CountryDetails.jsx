import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import countries from  '../countries.json';
import './CountryDetails.css'
  
function countryDetails(props) {
    console.log('params', props.match.params.id);
    const countryDetail = countries.find(
        (country) => country.cca3 === props.match.params.id
      );

    return (
        <div className="details col-7">
            <h1>{countryDetail.name.common}</h1>

            <hr></hr>

            <div className="row col-7">
                <p>Capital</p>
                <p className="col-4">{countryDetail.capital}</p>
            </div>

            <hr></hr>

            <div className="row col-7">
                <p>Area</p>
                <p className="col-4">{countryDetail.area} km2</p>
            </div>

            <hr></hr>

            <div className="row col-7">
                <p>Borders</p>
                <div className="col-4">
                    <ul>
                    {countryDetail.borders.map(borders => {
                        const bordersName = countries.find(country => {
                            return borders === country.cca3;
                        })
                        return (
                            <li>
                                <Link to={`${borders}`}>
                                    {bordersName.name.common}
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default countryDetails;