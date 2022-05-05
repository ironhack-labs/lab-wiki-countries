import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CountriesDetails({ countriesData }) {
    const [countries, setCountries] = useState(countriesData)
    const { alpha3Code } = useParams()

    useEffect(() => {
        const selectedCountry = countriesData.filter(e => alpha3Code === e.alpha3Code)
        setCountries(selectedCountry)
    }, [alpha3Code])


    return (
        <div>
            {countries.map((e) => {
                return (
                    < div className="col-7" >
                        <h1>{e.name.common}</h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Capital</td>
                                    <td>{e.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {e.area} km
                                        <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            <li><a href="/AND">Andorra</a></li>
                                            <li><a href="/BEL">Belgium</a></li>
                                            <li><a href="/DEU">Germany</a></li>
                                            <li><a href="/ITA">Italy</a></li>
                                            <li><a href="/LUX">Luxembourg</a></li>
                                            <li><a href="/MCO">Monaco</a></li>
                                            <li><a href="/ESP">Spain</a></li>
                                            <li><a href="/CHE">Switzerland</a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })
            }
        </div>

    )
}

export default CountriesDetails