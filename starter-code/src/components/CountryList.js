import React from "react";
import { Link } from 'react-router-dom';

const CountryListItem = props => {
    return (
        <Link to={props.code}>
            <div id="Country-Box" name={props.name}>
            <p>{props.name} {props.image}</p>
            </div>
        </Link>
    )
} 

export default CountryListItem;
