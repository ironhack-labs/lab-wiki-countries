
import { useEffect, useState } from "react"

import axios from "axios"

import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"


function CountryDetails() {

    const { countryId } = useParams()

    const [country, setCountry] = useState()



    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(responseFromApi => setCountry(responseFromApi.data))
            .catch(err => console.log(err))

    }, [countryId])

    return (
        country
            ?
            <>

                <div className="container">
                    <p style={{ fontSize: 24, fontWeight: "bold" }}>Country Details</p>
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead />
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} km
                                    <sup> 2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>

                                <ul>
                                    {
                                        country.borders.map((elm, _id) => {
                                            return (
                                                <li>

                                                    <Link to={`/${elm}`} key={_id}>
                                                        {elm}
                                                        <br />
                                                    </Link>

                                                </li>


                                            )
                                        })
                                    }
                                </ul>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </>
            :

            <h1>CARGANDO....</h1>

    )
}

export default CountryDetails
