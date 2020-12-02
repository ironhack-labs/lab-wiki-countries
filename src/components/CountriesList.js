import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
    return (
        <section className="col-5">
            <article className="list-group">
            
                    {countries.map((country, idx) => (
                        <div className="list-group-item list-group-item-action" key={idx}>
                            <Link to={`/countries/${country.cca3}`}>{country.flag} {country.name.official}</Link>
                        </div>
                    ))}
            </article>
        </section>
    )
}

export default CountriesList