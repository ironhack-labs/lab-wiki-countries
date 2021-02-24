import { Link } from 'react-router-dom';
import React from 'react';

function CountriesList(props) {
    return (
        <div className="row">
            <div class="list-group">
                {props.countries.map((country) => {
                    return (
                        <Link
                            className="list-group-item list-group-item-action"
                            to={`/country/${country.cca3}`}>
                            {country.flag} {country.name.common}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default CountriesList;