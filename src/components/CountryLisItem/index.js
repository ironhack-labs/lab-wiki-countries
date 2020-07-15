/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Link } from 'react-router-dom';

const CountryListItem = ({ name, cca3, flag }) => {
    
    return (
        <Link className="list-group-item list-group-item-action" to = {`/${cca3}`}>{flag} {name}</Link>
    )
}

export default CountryListItem