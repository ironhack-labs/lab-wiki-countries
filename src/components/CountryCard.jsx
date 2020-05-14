import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
    return (
        <Link to={`/${props.cca3}`} className="list-group-item list-group-item-action">
            <img src={props.flag} alt="country-flag"/>{props.name.common}
        </Link>
    );
};

export default CountryCard;