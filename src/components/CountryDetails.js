import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default function CountryDetails(props){

        const {countriesList, match} = props;
        console.log(props)
        let matchCountry = countriesList.find((country)=>{
            return country.cca3 === match.params.cca3;
        })
        let borderCountries = [];
        for(let i=0; i<matchCountry.borders.length; i++){
            let border = countriesList.find((country)=>{
                return country.cca3 == matchCountry.borders[i];
            })
            borderCountries.push(border);
        }
        return (
            <div>
                <h1>{matchCountry.name.common}</h1>
                <h4>Capital: {matchCountry.capital}</h4>
                <h4>Area:  {matchCountry.area}</h4>
                <h4>Borders:</h4>
                <ul>
                {
                    borderCountries.map((country,i)=>{
                        return <li key={i}><Link to={`/country/${country.cca3}`}>{country.name.common}</Link></li>
                    })
                }
                </ul>
            </div>
        )
}

