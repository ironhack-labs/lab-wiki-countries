import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Countries.css'

const isActive = (origin, target) => origin === target ? 'active' : ''

const Countries = ({ countries, handleSelect, regionSelected, link }) =>
    <div className="countriesList" >
        {countries.map(({ cca3, flag, name }) =>
            <Link
                key={cca3}
                onClick={() => handleSelect(cca3)}
                className={`list-group-item list-group-item-action countryList ${isActive(cca3, regionSelected)}`}
                to={link}>
                    {flag} - {name.common}
            </Link>
        )}
    </div>
 
export default Countries;
