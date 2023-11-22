import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const baseURL = "https://ih-countries-api.herokuapp.com/countries"


function HomePage() {

    const [countries, setCountries] = useState([])


    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setCountries(response.data))
            .catch(err => console.log("THIS IS AN ERROR", err))
    }, [])

    console.log(countries)

    return (

        <div className="HomePage">
            <br />
            <h1>WikiCountries: Your Guide to the World</h1>
            <hr />
            <br />

            {
                countries.map(elm => {
                    return (
                        <div key={elm._id}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                            <Link to={`/${elm.alpha3Code}`}><h3>{elm.name.common}</h3></Link>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage
