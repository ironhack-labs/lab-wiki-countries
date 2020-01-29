import React, { Component } from 'react';
import {Link} from "react-router-dom";


const CountryDetail = (props) => {
        let {name,cca2, cca3} = props.country
        const flaglink= `https://www.countryflags.io/${cca2}/flat/64.png`
        return (
            <Link  to={`/${cca3}`} className="list-group-item list-group-item-action"> <img src={flaglink}/> {name.common} </Link>

        )
}


export default CountryDetail ;

