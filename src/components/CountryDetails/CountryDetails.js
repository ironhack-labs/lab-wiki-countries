import React from 'react'
import { Link } from 'react-router-dom';
import Country from './../../countries.json'

export default function CountryDetails(props) {

    console.log(props)
    const { cca3 } = props.match.params;
    const foundCountry = Country.find(country => country.cca3 === cca3);
    return (
        <section className='col-6'>
            {foundCountry &&
                <div>
                    <h1>Name: {foundCountry.name.common}</h1>
                    <hr/>
                    <p>Capital: {foundCountry.capital}</p>
                    <hr/>
                    <p>Area: {foundCountry.area}</p>
                    <hr/>
                    Borders: {foundCountry.borders.map((one, idx)=>{
                        return(
                            <div key={idx}>
                            <Link to={`/country-details/${foundCountry.cca3}`}>
                                <li>{one}</li>
                            </Link>
                            </div> 
                        )
                    })}
                </div>
            }
        </section>
    )
}

