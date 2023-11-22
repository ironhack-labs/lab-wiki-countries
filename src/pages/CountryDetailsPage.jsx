
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const CountryDetailsPage = () => {

    const [countries, setCountries] = useState()
    const { alpha3Code } = useParams()




    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)

            .then((country) => {
                console.log(country.data)
                setCountries(country.data)


            })
            .catch(console.log('error en api'))
    }, []);

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

            <h1>hola</h1>

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>Paris</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            551695 km
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
        </div >


    )
}

export default CountryDetailsPage