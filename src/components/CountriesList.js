import React from 'react';
import {Link} from 'react-router-dom';

const CountriesList = (props) =>{
    return (
        <ul className="countriesList">
            {
                props.countries.map(country => {
                    return (
                        <li>
                            <Link className="" key={country.cca3} to={`/country/${country.cca3}`}>
                                {country.flag} {country.name.common} 
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default CountriesList;