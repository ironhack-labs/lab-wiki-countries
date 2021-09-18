import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

const CountriesList = (props) => {
    return (
        <div className='list'>
            <ul>
                {props.countries.map((country) => {
                   return (
                        <Link key={country.alpha3Code} 
                                className='list-group-item list-group-item-action'
                                to={'/' + country.alpha3Code}
                        >
                            <img className='me-2'
                                src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                                alt={`${country.name}`}
                            />
                            {country.name}
                        </Link>
                   );
                })}
            </ul>
        </div>
    )
}

export default CountriesList;