import React from 'react';
import countries from '../../countries.json';

const CountryDetail = (props) => {
    const country = countries.find((e) => e.cca2 === props.match.params.id);
    return (
        <h2>{country.name.official}</h2>
    );
}

export default CountryDetail;