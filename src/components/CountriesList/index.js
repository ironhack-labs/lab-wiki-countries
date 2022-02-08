import React from "react";

const CountriesList = ( {countries} ) => {
    return (
        <div className="col-5">
            <div className="list-group">
                {countries.map(country => (
                    <a key={country.alpha3Code} className="list-group-item list-group-item-action" href={`/${country.alpha3Code}`}>
                        {country.name.common}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CountriesList; 