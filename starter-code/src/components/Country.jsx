import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    return (
        <Link class="list-group-item list-group-item-action" to={props.cca3}>{props.flag} {props.name.common}</Link>
    )
}

export default Countries;