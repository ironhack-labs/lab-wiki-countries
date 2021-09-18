import React from "react";
import { Link } from 'react-router-dom';
import '../countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

const CountriesList = (props) => {
    return (
        <div className='list'>
            <ul>
                {props.countries.map((country) => {
                   return (
                        <Link key={country.cca3} 
                                className='list-group-item list-group-item-action'
                                to={'/' + country.cca3}
                        >
                            {/* <img className='flags'
                                src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                                alt={`${country.name.common}`}
                            /> */}
                            {country.flag} {country.name.common}
                        </Link>
                   );
                })}
            </ul>
        </div>
    )
}

export default CountriesList;