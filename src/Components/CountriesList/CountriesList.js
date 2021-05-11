import React from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../../countries.json';

class CountriesList extends React.Component {
    render() {
        return (
        <div>
            {countriesData.map((country) => {
            return (
                <div>
                <Link to={`/${country.cca3}`} key={country.cca3}>
                    <div>
                        <p>{country.flag}{country.name.common}</p>
                    </div>
                </Link>
                </div>
            );
            })}
        </div>
        );
    }
}

export default CountriesList;
