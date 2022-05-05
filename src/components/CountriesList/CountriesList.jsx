import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/CountriesList.css'
import axios from 'axios'


function CountriesList({ countries }) {
   
    return (
        <div>
            <h3>Lista de paises</h3>
            {countries.map((country) => {
                return (
                    <ul className="countriesList">

                        <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                            <div>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                {country.name.common}
                            </div>
                        </Link>
                    </ul>
                )
            })}
        </div>

    )
}
export default CountriesList