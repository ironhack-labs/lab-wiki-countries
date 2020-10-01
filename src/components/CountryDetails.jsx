import React from 'react';
import countries from '../countries.json';

const CountryDetails = props => {
    const country = countries.filter(c => c.cca3 === props.match.params.id)[0];
    console.log(country.name)

    return (
        <main>
            <article className="CountryDetails__info">
                <h3>Capital </h3>
                <p>{country.capital}</p>
            </article>

            <hr></hr>

            <article className="CountryDetails__info">
                <h3>Area</h3>
                <p>{country.area} km<sup>2</sup></p>
            </article>

            <hr></hr>

            <article className="CountryDetails__info">
                <h3>Borders</h3>
                <ul>
                    {country.borders.map(border => <li>{border}</li>)}
                </ul>
            </article>
        </main>
    )
}

export default CountryDetails