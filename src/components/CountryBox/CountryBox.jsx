import React from 'react';
import { Link } from 'react-router-dom';

const CountryBox = ({country}) => {
   //const twoDigitsLowerCase = twoDigits.toLowerCase()
    return (
        <div className="list-group-item list-group-item-action" >
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
            <h2>{country.name.common}</h2>
        </div>
    );
};

export default CountryBox;