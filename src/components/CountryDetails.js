import { useEffect, useState } from "react"
import axios from 'axios';
import { Link, useParams } from "react-router-dom"

const CountryDetails = () => {

    const [countryDetails, setCountryDetails] = useState(null);
    const { alpha3Code } = useParams();

    const basicURL = "https://ih-countries-api.herokuapp.com/countries/";
    useEffect(() => {
        axios
            .get(basicURL + alpha3Code)
            .then((res) => {
                setCountryDetails(res.data)
            })
            .catch((e) => {
                console.log(e);
            });
    }, [alpha3Code])

    const tdStyle = {
        width: "30%"
    }

    console.log(countryDetails)

    const renderDetails = () => {
        return (
            <div>
                <h3 className="mb-5">{countryDetails.name.common}</h3>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>Capital</td>
                            <td>{countryDetails.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countryDetails.area}km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul className="list-group list-group-flush">
                                    {countryDetails.borders.length === 0
                                        ? "Sorry, we do not have this information" :
                                        countryDetails.borders.map((c, index) => {
                                            return (
                                                <li className="list-group-item" key={index}>
                                                    <Link to={"/" + c}> {c}</Link>
                                                </li>
                                            )
                                        })
                                    }

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
            {countryDetails === null
                ? "loading...."
                : renderDetails()
            }
        </div>
    )
}

export default CountryDetails