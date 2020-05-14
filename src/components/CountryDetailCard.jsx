import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetailCard = (props) => {
    const country = countries.find(c=>c.cca3===props.id);
    return (
        <li>
            <Link to={`/${props.id}`}>{country.name.common}</Link>
        </li>
    );
};

export default CountryDetailCard;