import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



const CountryDetails = () => {

    const { alpha3Code } = useParams()
    const baseURL = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`

    const [country, setCountry] = useState()

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setCountry(response.data))
            .catch(err => console.log(err))

    }, [alpha3Code])
    console.log(country)

    return (
        !country
            ?
            <h1>Cargando...</h1>
            :
            <>
                <h1>Country Details</h1>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                <h3>Country: {country.name.common}</h3>
                <p>Capital: {country.capital} </p>
                <p>Area: {country.area}</p>

                <ul>
                    <li>Border</li>
                    {
                        country.borders.map((elm, i) => {

                            return (
                                <Link key={i} to={`/${elm}`}>
                                    <li style={{ listStyle: 'none' }}>
                                        {elm}
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>




            </>


    )
}

export default CountryDetails
