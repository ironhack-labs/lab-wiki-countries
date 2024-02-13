import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadCountries(), [])

    const loadCountries = () => {

        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                setCountries(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="CountriesList">

            <h1>WikiCountries: Your Guide to the World.</h1>

            {
                isLoading
                    ?
                    <h2>Loading...</h2>
                    :
                    countries.map(cont => {

                        return (

                            <article className="CountrieCard" key={cont._id}>
                                <Link to={`/${cont._id}`}><p>{cont.name.common}</p></Link>

                            </article>

                        )
                    })
            }

        </div>


    )

}

export default HomePage;
