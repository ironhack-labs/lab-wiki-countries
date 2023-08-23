import { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetailsPage";

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                setCountries(response.data.slice(0, 15))
            })
            .catch(error => {
                console.error('There was an error!', error)
            })
    }, [])

    return (
        <>
            <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

                {countries.map((elm) => {

                    return (

                        <>
                            <Link to={`/${elm.alpha3Code}`}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                                <p>{elm.name.common}</p>
                            </Link>
                            <hr />

                        </>

                    )

                })}

            </div >
        </>
    )
}
export default HomePage;
