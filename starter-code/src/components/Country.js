import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'




const Country = props => {
 
    
    return (
        <Link to={`/CountryDetails/${props.code}`}>
            <li>
               <p>{props.name} <span>{props.flag}</span></p>
            </li>
        </Link>
    )
}

export default Country