
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function CountryDetailsPage() {

    const [oneCountry, setOneCountry] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { countryId } = useParams()

    useEffect(() => {

        setIsLoading(true)
        
        async function getData() {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            setOneCountry(response.data)
        }

        getData().finally(() => setIsLoading(false))

    }, [countryId])

    function displayedCountryData(oneCountry) {
        return (
            <div key={oneCountry.alpha3Code} className="container">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt={oneCountry.name.common} />
                <h2>{oneCountry.name.common}</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{oneCountry.capital}</td>
                        </tr>
                        <tr>                        
                            <td>Area</td>
                            <td>{oneCountry.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {oneCountry.borders.map((borderCountry) => {
                                        return (
                                            <Link key={borderCountry} to={`/${borderCountry}`}>
                                            <li>{borderCountry}</li></Link>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <h3>Country Details</h3>
            {isLoading ? (<h6 className="message-container">Loading...</h6>)
            : (displayedCountryData(oneCountry))}
        </div>
    )
}

export default CountryDetailsPage;
