
import React from 'react';

import { Link } from 'react-router-dom'

const CountryItem = props => {
    return (
        <li>                
                <Link to={props.CCA3} ><span> {props.flag}</span>{props.name.common}</Link>            
        </li>
    )
}

export default CountryItem;