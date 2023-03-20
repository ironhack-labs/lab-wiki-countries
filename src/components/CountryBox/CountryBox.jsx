import React from 'react';
import { Link } from 'react-router-dom';

const CountryBox = ({name, twoDigits, threeDigits}) => {
    const twoDigitsLowerCase = twoDigits.toLowerCase()
    return (
        <Link className="list-group-item list-group-item-action" to={`/${threeDigits}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${twoDigitsLowerCase}.png`}/>
            <h2>{name}</h2>
        </Link>
    );
};

export default CountryBox;