import React from 'react';
import {Link} from 'react-router-dom';

export default function CountriesList(props){
    return (
        <ul className="list-group">
            {
                props.countries.map((country) => {
                return <Link to={`/countries/${country.cca3}`}>
                        <li className="list-group-item">
                        {country.flag}&nbsp;&nbsp;{country.name.common}
                        </li>
                    </Link> 
                })
            }
        </ul>     
    )
}


