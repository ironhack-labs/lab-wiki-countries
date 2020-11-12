import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = (props) => {
    return ( <div>
        { props.countries.map((eachCountry, index) => {
            return (
                <div>
                <Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
                <img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`}/>
                </div>
            )
        })

        }
        </div>
    )
}

export default CountriesList