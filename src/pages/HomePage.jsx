import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const baseURL = 'https://ih-countries-api.herokuapp.com/countries'


const HomePage = () => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setCountry(response.data))
            .catch(err => console.log(err))
    }, [])

    console.log(country)
    return (
        !country
            ?
            <h1>Cargando...</h1>
            :
            <>
                <h1>WikiCountries</h1>
                <ul>
                    {
                        country.map(elm => {
                            return (
                                <Link key={elm._id} to={`/${elm.alpha3Code}`}>
                                    <li style={{ listStyle: 'none' }}>
                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                                        {elm.name.common}
                                    </li>
                                </Link>)
                        })
                    }
                </ul>
            </>
    )
}

export default HomePage
