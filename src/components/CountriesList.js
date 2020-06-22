import React from 'react';
import countries from "../countries.json";
import "./CountriesList.css";
import {Link, Route} from "react-router-dom";
import CountryDetail from "../components/CountryDetail";

export default function CountriesList() {
    return (
        <div>
            <div id="root">
                <div>
                    <nav className="navbar navbar-dark bg-primary mb-3">
                        <div className="container">
                            <a className="navbar-brand" href="/">WikiCountries</a>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 text-left">
                                <div className="list-group list-scrole">
                                {countries.map((country)=>
                                    <Link className="list-group-item list-group-item-action" to={`/country/detail/${country.cca3}`}><img className="flag" src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="flag"/>  {country.name.common}</Link>
                                )}
                                </div>
                            </div>
                            <Route path="/country/detail/:cca3" component={CountryDetail} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


