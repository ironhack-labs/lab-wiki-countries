import { Link } from 'react-router-dom';
import React from 'react';

function CountriesList(props) {
    return (
        <div className="row">
            <div class="list-group">
                {props.countries.map((theCountry) => {
                    return (
                        <Link
                            className="list-group-item list-group-item-action"
                            to={`/country/${theCountry.cca3}`}>
                            {theCountry.flag} {theCountry.name.common}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default CountriesList;