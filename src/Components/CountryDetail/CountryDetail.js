import React from 'react';
import countries from '../../countries.json';

const CountryDetail = (props) => {
    const country = countries.find((e) => e.cca3 === props.match.params.id);
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} Km2</p>
            <p>Borders:</p>
            <ul>
                {fillBorders(country.borders)}
            </ul>
        </div>
    );
}

const fillBorders = (borders) => {
    return borders.map((e, index) => {
        const border = countries.find(country => e === country.cca3);
        return <li key={index}><a className="listitem" href={`/country/${border.cca3}`}>{border.name.common}</a></li>
    });
}

export default CountryDetail;