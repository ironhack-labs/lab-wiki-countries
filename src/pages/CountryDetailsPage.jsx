import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetailsPage  () {
    const [country, setCountry] = useState(null);
    const { alpha3Code } = useParams();

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
            .then(response => {
                setCountry(response.data);
            })
            .catch(error => {
                console.error("There was an error when obtaining the country data:", error);
            });
    }, [alpha3Code]);

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Country Details</h1>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>AREA: {country.area} km</p>

           {country.borders.map(borderCountry => (
    <div key={borderCountry}>
        <Link to={`/${borderCountry}`}>{borderCountry}</Link>
    </div>
))}
        </div>
    );
}

export default CountryDetailsPage ;
