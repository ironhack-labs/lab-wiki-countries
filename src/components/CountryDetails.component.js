import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';



function CountryDetailsComponent(props) {
    let { cca3 } = useParams();
    const country = props.getCountry(cca3);

    return (

        <div className="country-details">
            <h3>{country.name.common}</h3>
            <p>{`Code: ${cca3}`}</p>
            <p>{`Currency: ${country.currency[0]}`}</p>
            <p>{`Capital: ${country.capital}`}</p>
            
        </div>
    )
};

export default CountryDetailsComponent;