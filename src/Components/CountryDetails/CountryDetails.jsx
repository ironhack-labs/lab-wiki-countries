import { Link, useParams } from "react-router-dom";
import './CountryDetails.css'
import { useEffect, useState } from "react";

function CountriesDetails({ countries }) {

    const { id } = useParams()

    const selectedCountry = countries.find(elm => elm.alpha3Code === id)

    return (
        <div>
            <img className="mainFlag" src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
            <hr />
            <h1> {selectedCountry.name.common} </h1>
            <hr />
            <h2>Capital: {selectedCountry.capital} </h2>
            <hr />
            <h2>Area: {selectedCountry.area} km2</h2>
            <hr />

            <ul>

                {selectedCountry.borders.map((elm, i) => {
                    return (

                        <div key={i}>
                            <Link to={`/${elm}`}>
                                <p>{elm}</p>
                            </Link>
                        </div>)
                })
                }

            </ul>


            <Link to="/">Volver al listado</Link>
        </div>
    );
}


export default CountriesDetails;
