import React from 'react';
import { Link } from 'react-router-dom';
import CountriesList from '../CountriesList/CountriesList';
import countries from '../../countries.json'

export default function CountriesDetails(props) {
    console.log(props);

    const getCountry = (cca3) =>{
        return countries.find(country => country.cca3 == cca3)
    }

    const foundedCountry = getCountry(props.match.params.cca3);
    console.log('hola', foundedCountry)

    return (
        <div>
            {foundedCountry ? <div>
            <h2>Country: {foundedCountry.name.common}</h2>
            <p>Capital: {foundedCountry.capital}</p>
            <ul> Borders:
                { foundedCountry.borders && foundedCountry.borders.map((border) =>{
                    return (
                        <li>{border}</li>
                    )
                })}
            </ul>
            </div> :
            <p>Error</p>}
        </div>
    )
}
