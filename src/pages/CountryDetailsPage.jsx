import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function CountryDetails() {
    const params = useParams()
    const [detailCountry, setDetailCountry] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`)
            .then(response => {
                console.log(response.data)
                setDetailCountry(response.data)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [params.countryId])

    return loading ? (
        <p>Loading...</p>
    ) : (
        <div>
            <p id="country-details-title">Country Details</p>

            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${detailCountry.alpha2Code.toLowerCase()}.png`}
                alt={`${detailCountry.name.common} flag`}
            />
            <h2>{detailCountry.name.common}</h2>

            <table>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{detailCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {detailCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {detailCountry.borders &&
                                detailCountry.borders.map((border, index) => {
                                    return (
                                        <ul key={index}>
                                            <li>
                                                <Link to={`/${border}`}>
                                                    {border}
                                                </Link>
                                            </li>
                                        </ul>
                                    )
                                })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails
