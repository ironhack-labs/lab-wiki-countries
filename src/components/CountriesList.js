import React from 'react';
import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';


function CountriesList(props) {

    return (
        <div className="row">
            <h1>List of Countries</h1>
            {props.countries.map((countries) => {
                return (
                    <div>
                        <Link to={`/${countries.alpha3Code}`} element={<CountryDetails country={countries}/>}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`} width="20px"></img>
                            <span> {countries.name.common}</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default CountriesList