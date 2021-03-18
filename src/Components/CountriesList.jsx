import React from 'react';
import countriesJSON from './../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {


    return (
        <div className="col-5" 
            style={
                {maxHeight: "90vh",
                overflow: "scroll"}
            }
        >
            <div className="list-group">
                {countriesJSON.map(country => 
                    <div key={country.cca3}>
                        <Link
                            className="list-group-item list-group-item-action" to={`/${country.cca3}`}
                        >
                            {country.flag} {country.name.common}
                        </Link>
                    </div>
                )}
          </div>
        </div>
    )
}

export default CountriesList
