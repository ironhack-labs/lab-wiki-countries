import { Route } from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"


function CountryDetails({ detailsCountriesJSON }) {

    const { id } = useParams()

    const foundCountry = detailsCountriesJSON.find(elm => elm.alpha3Code === id) /* para que saque todos los elementos qie coincidan con el id */

    /* console.log(useParams()) */ /* Comprobamos si da el id */
    {/* <h1>yay</h1> */ } /* Comprobamos si retorna algo poniendo ese h1 en el h1*/

    return (
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
            <h2>{foundCountry.name.common}</h2>
            <p>{foundCountry.area} km</p>
        </div>

    )
}




export default CountryDetails