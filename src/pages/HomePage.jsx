import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://ih-countries-api.herokuapp.com/countries"


function HomePage() {


    const [countries, setCountries] = useState([])

    useEffect(() => {

        axios
            .get(baseUrl)
            .then((response) => {
                setCountries(response.data)
            })

    }, [])
    if (!countries) return null

    return (
        <div className="Homepage">
            <h1>WikiCountries: Your Guide to the World</h1>

            {
                countries.map(elm => {
                    return (
                        <Link to={`/${elm.alpha3Code}`}>
                            <h3>{elm.name.common}</h3>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}></img>
                        </Link>

                    )

                })


            }


        </div>

    )
}

export default HomePage;


