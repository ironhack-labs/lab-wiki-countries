import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryDetails = () => {

    const { countryId } = useParams()
    const [countryDetails, setCountryDetails] = useState({})

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => setCountryDetails(response.data))
            .catch(err => console.log(err))
    }, [countryId])

    return (
        countryDetails.name
            ?
            <>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

                <h1>{countryDetails.name.common}</h1>

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30 %" }}>Capital</td>
                            <td>{countryDetails.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countryDetails.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryDetails.borders.map(eachBorder => {
                                        return (<li><Link to={`/${eachBorder}`}>{eachBorder}</Link></li>)
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
            :
            <h1>CARGANDO....</h1>
    )
}

export default CountryDetails;
