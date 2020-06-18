import React from 'react';
import countries from '../countries.json'
import CountryDetail from './CountryDetail.js'
import { Link } from 'react-router-dom';
import Countries from '../countries.json';

export default class CountriesList extends React.Component{
    state = {
        countries : Countries
    }

    render(){
        return (
            <>
            <div  >

            <nav className="navbar bg-light">
            <ul className="navbar-nav">
                {this.state.countries.map((country,index)=>{
                    return(
                        <li key = {index}className="nav-item">
                        <Link className="nav-link" to={`/countries/${country.cca3}`} >{country.flag} {country.name.common} </Link>
                        </li>
                    )
                })}

            </ul>

            </nav>
            </div>
            </>

        )
    }
}