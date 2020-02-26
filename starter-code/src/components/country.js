import React from 'react';
import { Link } from 'react-router-dom';



const Country = props => {
 
    
    return (
        <li>
            <Link to={`/CountryDetails/${props.code}`}>{props.name} <span>{props.flag}</span></Link>
        </li>
    )
}

export default Country