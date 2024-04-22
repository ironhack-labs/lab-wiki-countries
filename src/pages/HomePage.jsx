import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


function HomePage() {
    const [countries, setCountries] = useState([])

    const countriesList = () => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then((response) => {
                setCountries(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        countriesList()
    }, [])

    return (
        <>
        <h1>WikiCountries: Your Guide to the World</h1>
        <div>
            {countries.map(country => (
                <div key={country._id}>
                    <Link to={`/${country.alpha3Code}`}>
                    <p>{country.name.common}</p>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                    </Link>
                </div>
                ))}
        </div>
        </>
    )
}

export default HomePage;
