import React , { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';

import countries from "../countries.json";
import SearchBar from "./SearchBar";


export default function Tests(props) {

    const [countriesData, setCountries] = useState(countries);

    function searchCountry(input) {
        let countriesFound = countries.filter((country) => {
            let name = (country.name.common).toLowerCase()
            let search = input.toLowerCase()
            if(name.includes(search)) {return true}
        })
        setCountries(countriesFound)
    }
/* 
    <div class="bg-light border-right vh-100" id="sidebar-wrapper">
    <div class="sidebar-heading">
        <SearchBar searchHandler={searchCountry} />
    </div>
    <div class="list-group list-group-flush overflow-auto h-100">
        {countriesData.map((country) => {
            return (<Link class="list-group-item list-group-item-action" to={`/details/${country.cca3}`}>{country.flag} {country.name.common}</Link>)
        })}
    </div>
</div>

 */

    return (

  <div id="list-sidebar" class="col d-flex flex-column align-items-stretch" style={{width: "280px"}}>
    <span class="d-flex align-items-center p-3 border-bottom fs-5 "><SearchBar searchHandler={searchCountry} /></span>

  <div class="list-group list-group-flush border-bottom scrollarea">
    {countriesData.map((country) => {
        return(
            <Link to={`/details/${country.cca3}`} class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">{country.name.common}</strong>
                    <strong>{country.flag}</strong>
                </div>
            </Link>
        )
    })}
        
  </div>
</div>


    )}
