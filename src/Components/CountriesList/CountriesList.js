import React from 'react';
import './CountriesList.css'

const CountriesList = ({ countries }) => {
    return (
        <div className="list-group">
            {
                countries.map((e, index) =>
                    <a href={`/country/${e.cca3}`} className="list-group-item list-group-item-action" key={index}>
                        <img src={`https://www.countryflags.io/${e.cca2}/flat/64.png`} alt={`${e.name} flag`} />
                        <p>{e.name.common}</p>
                    </a>
                )
            }
        </div>
    );
};

export default CountriesList;