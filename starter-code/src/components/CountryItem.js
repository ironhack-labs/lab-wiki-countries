import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CountryItem.css'

const CountryItem = ({country}) => {
    const link = country.cca3 === undefined ? '/': country.cca3
    return ( 
        <Link key={country.cca3} className="list-group-item list-group-item-action countryList" to={link}>{country.flag} - {country.name.common} </Link>
     );
}
 
export default CountryItem;