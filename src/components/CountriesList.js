import React from 'react';

// import countries from '../countries';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {

    return (
            <div className="col-5 scroll">
                <div className="list-group">
                    {props.myCountries.map((country, index) => {
                        return (
                            <div key={index}>
                                <Link to={"/wiki-countries/" + country.cca3}>{country.flag} {country.name.common}</Link>
                            </div>
                            );
                    })}
                </div>
            </div>
    );
}

export default CountriesList;