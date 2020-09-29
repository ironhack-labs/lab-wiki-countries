import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

const CountriesList = (props) => {
    const allCountriesLi = props.countries.map(country => (
        <li className="noDecoration">
            <Link to={`/country/${country.cca3}`} className="list-group-item list-group-item-action">
                <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} className="flag" />
                {` ${country.name.common}`}
            </Link>
        </li>
    ));

    return (
        <div className="col-5" style={{ maxHeight: '85vh', overflow: 'scroll' }}>
            <ul class="list-group">
                {allCountriesLi}
            </ul>
        </div>
    );
};

export default CountriesList;