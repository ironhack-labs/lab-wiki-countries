import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../../countries.json';


function CountryDetails(props) {

    const country = countries.find((elm) => elm.cca3 === props.match.params.cca3)

    return (
        <div>
            <h2>Country Name: {country.name.official}</h2>
            <h2>Area: {country.area}</h2>
            <h2>
                Borders:{' '}
                {country.borders.map(
                    (elm, idx) => {

                        const border = countries.find((element) => element.cca3 === elm);

                        return (
                            <li key={idx}>
                                <Link to={`/countries/${border.cca3}`}>{border.name.common}</Link>
                            </li>
                        );
                    }
                )}
            </h2>
        </div>
    )
}

export default CountryDetails;
