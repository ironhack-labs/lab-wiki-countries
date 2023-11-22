import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function CountryDetails() {

    const { countryId } = useParams()
    const [country, setCountry] = useState()

    const countryURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`

    useEffect(() => {
        axios
            .get(countryURL)
            .then((response) => setCountry(response.data))
            .catch(err => console.log("THIS IS AN ERROR", err))
    }, [countryId])

    return (

        country
            ?
            <>
                <br />
                < h1 > Country Details: {country.name.common}</h1 >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                <br />
                <br />
                <h3><b>Capital: </b>{country.capital.toString()}</h3>
                <h3><b>Region: </b>{country.region}</h3>
                <h3><b>Area: </b>{country.area} km²</h3>
                <h3><b>Borders: </b>
                    <ul>
                        {
                            country.borders.map(elm => {

                                return (
                                    <Link to={`/${elm}`}><h3>{elm}</h3></Link>
                                )
                            })
                        }
                    </ul>
                </h3>

            </>
            :
            <h2>Loading country data...</h2>
    )
}

export default CountryDetails