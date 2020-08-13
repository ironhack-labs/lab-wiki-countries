import React from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = ({name, cca3, flag}) => {

    const routeLink = `/${cca3}`
    return (
        <NavLink className="list-group-item list-group-item-action" to={routeLink}>{flag} {name}</NavLink>
    )
}

export default CountriesList;