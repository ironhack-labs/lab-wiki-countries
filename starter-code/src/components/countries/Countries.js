import React from 'react';
import './country.css';
import { Link, NavLink } from 'react-router-dom';

export default function Countries(props) {
    return (
        <div className='country'>
           <div>{props.flag}</div>
           <li><NavLink exact to={'/country/'+props.cca3}>{props.name}</NavLink></li>
        </div>
    )
}
