import React from "react";
import { Link } from 'react-router-dom'
import  countries  from './../../countries.json'
import CountryDetails from './../CountryDetails/CountryDetails'
import './CountriesList.css'

export default function CountriesList() {

    


    

    return(
        countries.map(elm => {
        return (
        <div class="container">
            <div class="row">
                <div class="col-5" id='countries-list' >
                    <div class="list-group">
                        <Link to="/country-details" class="list-group-item list-group-item-action">
                        {elm.name.common}</Link>
                    </div>
                </div>
            </div>
        </div>)
        }
))
}
