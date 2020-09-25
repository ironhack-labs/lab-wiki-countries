import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    return (
        <div>
            <ul className="list-group">
            {props.countries.map((country, index) => {
                return (
                <Link to={`/country/${index}`} key={index}>
                <li className='list-group-item'> 
                <div>{country.flag}</div>
                <div>{country.name.official}</div>
                </li> 
                </Link>
                )})}
            </ul>
        </div>
    )
}
