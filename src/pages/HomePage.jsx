import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

function HomePage() {

    useEffect(() => {

        axios.get("https://ih-countries-api.herokuapp.com/countries")

            .then(response => setCountries(response.data))
            .catch(err => console.log(err))
    }, []);

    const [countries, setCountries] = useState('')

    return (

        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>

            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>

            <div className="list-group">

                {
                    countries ?

                        countries.map(country => {

                            return (

                                <Link
                                    key={country.alpha3Code}
                                    to={`/${country.alpha3Code}`}
                                    className="list-group-item list-group-item-action"
                                >
                                    <img style={{ maxHeight: "2vh", margin: "10px" }}
                                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                        alt="flag"
                                    />
                                    {country.name.official}
                                </Link>
                            )
                        })
                        : 'Loading...'
                }




            </div >

        </div >

    )

}

export default HomePage
