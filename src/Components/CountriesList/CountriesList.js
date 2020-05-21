import React from 'react';

const CountriesList = ({ countries }) => {
    return (
        <div className="list-group">
            {
                countries.map((e, index) =>
                    <a href={`/country/${e.cca2}`} className="list-group-item list-group-item-action" key={index}>
                        <p>{e.cca2}</p>
                        <p>{e.name.official}</p>
                    </a>
                )
            }
        </div>
    );
};

export default CountriesList;