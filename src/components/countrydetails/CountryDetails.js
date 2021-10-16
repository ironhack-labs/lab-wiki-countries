import React from 'react';
import './CountryDetails.css'
import { Link } from 'react-router-dom';
// import CountriesList from '../countrieslist/CountriesList';


export default function CountryDetails(props) {
    // console.log(props);
    const countryId = props.match.params.countryId;
    const countryDetails = props.countries.find((country) => country.cca3 === countryId);

    const getBorderList = () => 
    countryDetails.borders.map((country, i) => {
        return(
            <li key={i}>
                • <Link to ={`/country-details/${country}`}>
                    {country}
                </Link>
            </li>
        )
    })

    // console.log(countryDetails);
    return (
        <div>
            <h1>{countryDetails.name.official}</h1>
            <p>Capital: {countryDetails.capital[0]}</p>
            <div className="border-list">
                Borders:
                    <ul>
                        {getBorderList()}
                    </ul>
            </div>
        </div>
    )
}