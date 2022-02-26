import React from 'react';
import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';


function CountriesList(props) {

    return (
        <>
            <h1>List of Countries</h1>
            <div className="col-5">
                <div className="list-group" style={{ maxHeight: '90vw', overflow: 'scroll' }}>
                    {props.fetch && <div className="spinner-grow text-primary" role="status">
                        <span class="sr-only"></span>
                    </div>}
                    {props.countries.map((countries) => {
                        return (
                            <div class="list-group-item list-group-item-action">
                                <Link to={`/${countries.alpha3Code}`} element={<CountryDetails country={countries} />}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`} width="20px"></img>
                                    <span> {countries.name.common}</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default CountriesList