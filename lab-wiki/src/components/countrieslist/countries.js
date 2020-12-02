import React from 'react';
import { Link } from 'react-router-dom';
const Countries = props => {

    return (
        <a className="list-group-item list-group-item-action" href={props.cca3}>🇦🇼{props.name} </a>
        <Link to='/{props.cca3}'>Home</Link>
        )
    }
    
    export default Countries