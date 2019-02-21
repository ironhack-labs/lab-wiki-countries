import React from 'react';
import ReactDOM from 'react-dom';
import countries from '../countries.json'

const countryDetail = (props) => {
    const cca3 = props.match.params.cca3;

    const foundCountry = countries.find((c) => c.cca3 === cca3)

    return(
        <div>
            <h1>{foundCountry.name.common}</h1>
            <hr/>
            <h2>Capital: <a className="detail">{foundCountry.capital}</a></h2>
            <h2>Area: <a className="detail">{foundCountry.area}</a></h2>
        </div>
    )
}

export default countryDetail;