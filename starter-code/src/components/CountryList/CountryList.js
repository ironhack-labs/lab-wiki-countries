import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import countries from '../../countries.json';

class CountryList extends  Component {
    render() {
        return (
            <div className="col-5 country-list">
                <div className="list-group">
                    {countries.map((country, index) =>
                        <Link
                            key={index}
                            to={`/detail/${country.cca3}`}>
                            {country.flag}
                            {country.name.common}
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default CountryList;