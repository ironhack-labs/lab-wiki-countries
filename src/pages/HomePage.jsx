import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function HomePage() {
    const [countries, setCountries] = useState({})
    const [loading, setLoading] = useState(true)

    // Alternative async await solution:
    // async function fetchCountries() {
    //     try {
    //         const result = await axios.get("https://ih-countries-api.herokuapp.com/countries")
    //         setCountries(result.data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchCountries()
    // }, [])

    useEffect(() => {
        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                const countriesSorted = response.data.slice().sort((a, b) => a.name.common.localeCompare(b.name.common))
                setCountries(countriesSorted)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    return loading ? (
        <p>Loading...</p>
    ) : (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <ul id="countries-list">
                {countries.map(country => {
                    return (
                        <li key={country.alpha3Code}>
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                alt={`${country.name.common} flag`}
                            />
                            <br />
                            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HomePage
