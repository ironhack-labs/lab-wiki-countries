import React from 'react';

import { Link } from 'react-router-dom';


export default function CountryList({countries}){



    return(
        countries.map(country =>{

            return (
            
            <Link to= {`/${country.ccn3}`} key={country.name.common} ><span role="img">{country.flag}</span>{country.name.common}</Link>
            )
        } )
    )
}