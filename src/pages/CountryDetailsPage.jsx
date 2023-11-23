import axios  from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";



function CountryDetails() {

    const { alpha3Code }= useParams()
    const [detailsCountries, setDetailsCountry] = useState()
    const baseUrl = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`

    useEffect(() => {
        axios
        .get(baseUrl)
        .then((response) => {setDetailsCountry(response.data)})
        .catch(err => console.log('err',err))
    },[alpha3Code])

    return(
        detailsCountries
        ?
        < >
            <h1>Country Details</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${detailsCountries.alpha2Code.toLowerCase()}.png`} alt="" />
            <h1>{detailsCountries.name.common}</h1>
            <h3>Capital: {detailsCountries.capital.toString()}</h3>
            <h3>Area: {detailsCountries.area}km</h3>
            <h4>Borders:</h4>
            <ul>
                {
                    detailsCountries.borders.map((elm,i) => {
                        return(
                        <Link key={i} to={`/${elm}`}><h3>{elm}</h3></Link>
                        )
                    })
                }
            </ul>


        </>
        :
        <h1>Cargando.....</h1>
    
    )
}

export default CountryDetails;

