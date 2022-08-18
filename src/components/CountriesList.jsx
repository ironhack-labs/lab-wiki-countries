
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const [countries, setCountries] = useState(props.countries);

    useEffect (() => {
        setCountries(props.countries);

    }, [props.countries]);

  return (
    <div>
    <h2>CountriesList</h2> 
    {countries.map((countries) => {
        return (
            <div key={countries.id} className="countriesList">
            <Link to={`/countries/${countries._id}`}>
            <h3>{countries.name.common}</h3>
            </Link>
            <p>{countries.name.common.alpha3code}</p>
            </div>
        );
    })}
    </div>
  );
}

export default CountriesList

