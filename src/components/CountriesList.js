import React from 'react';

// import countries from '../countries';
import CountryDetails from './CountryDetails';
import { Route, Link, Switch } from 'react-router-dom';

const CountriesList = (props) => {

    return (
        <div>
            <div className="col-5">
                <div className="list-group">
                    {props.myCountries.map((country, index) => {
                        return (
                            <div key={index}>
                                <Link to={"/wiki-countries/" + country.cca3}>{country.flag} {country.name.common}</Link>
                            </div>
                            )
                    })}

                    {/* <CountryDetails /> */}
                </div>
            </div>
        </div>
    );
}

export default CountriesList;