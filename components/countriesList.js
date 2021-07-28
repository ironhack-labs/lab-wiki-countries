import React, {useState, useEffect} from "react";
import ReactDOM  from "react-dom";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import countries from './countries.js';
import SearchBar from './Searchbar.js';

function CountriesList(props){
        const [countriesData, setCountries] = useState(countries);

        function searchCountry(input){
            let countriesFound = countries.filter((country) =>{
                let name = (country.name.common).toLowerCase();
                let search = input.toLowerCase();
                if(name.includes(search)) {return true};
            })
            setCountries(countriesFound);
        }

        return (
            <div className="col-3 m-0 p-0">
                <div id="list-sidebar" className="d-flex flex column">
                    <span class="d-flex align-items-center p-3 border-bottom fs-5">
                        <SearchBar searchHandler={setCountry}/>
                    </span>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                        {countriesData.map((country) =>{
                            return (
                                <Link to={`/details/${country.cca3}`} class="list-group-item list-group-item-action py-3 1h-tight" aria-current="true">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <strong class="mb-1">{country.name.common}</strong>
                                        <strong> {country.flag} </strong>
                                    </div>
                                </Link>
                            )
                        })}
                        </div>
                    </div>
                </div>
        )
}

export default CountriesList