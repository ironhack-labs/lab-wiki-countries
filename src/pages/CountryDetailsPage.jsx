import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

function CountryDetails() {

    const { countryId } = useParams()

    // console.log(countryId)

    const [country, setCountry] = useState('')

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => { setCountry(response.data) })
            .catch(err => console.log(err))
    }, [countryId])

    console.log(country)

    return (

        < div className="container" > <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
            {
                country ?

                    <>

                        <h1>{country.name.official}</h1>

                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "30%" }}>Capital</td>
                                    <td>{country.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {country.area} km
                                        <sup>2</sup>
                                    </td>
                                </tr>

                                <tr>

                                    <td>Borders</td>

                                    <td>

                                        {
                                            country.borders.map(borders => {

                                                return (
                                                    <p key={borders}>
                                                        <Link to={`/${borders}`}> {borders} </Link>
                                                    </p>
                                                )
                                            })
                                        }

                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </>
                    : 'Loading...'
            }
        </div >

    )
}

export default CountryDetails;

{/* <td>
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
                                    </td> */}

