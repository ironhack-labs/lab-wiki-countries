import React from 'react'
// import { CountryList } from './CountryList';
import countries from "./../countries.json";
import {Link} from 'react-router-dom';



const CountryDetail = (props) => {
    const { countryId } = props.match.params
    
    const getCountryById = countryId => {
        return countries.find(eachCountry => eachCountry.cca3 === countryId);
    };
    
    const countryToDisplay = getCountryById(countryId);



    return (
        <div>
            <h1>{countryToDisplay.name.official}</h1>
            <p>Capital: {countryToDisplay.capital}</p>
            <p>Area: {countryToDisplay.area}</p>
            <p>Borders: {countryToDisplay.borders.map((borderCountry)=> {
                return (
                    <ul>
                        <li>
                            <Link to={`/${borderCountry}`}>
                            {countries.map((country) => {
                                if (country.cca3 === borderCountry){

                                return <p>{country.name.common}</p>;
                                }
                            })}
                            </Link>

                        </li>
                    </ul>
                )
            
            })}</p>
        </div>
    )
}

export default CountryDetail;
