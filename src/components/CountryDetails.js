import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails(props) {

    const {countryCode} = useParams();

    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            .then((response) => {
                setCountry(response.data);
            }).catch((err) => {
                console.log(err);
            });
    }, [countryCode]);

    const renderCountryDetails = () => {
        return (
            <div className="col-7">
                <h1>{country.name.common}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area}km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map((border) => {
                                        return (
                                            <li key={border}>
                                                <Link to={`/${border}`}>{border}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <>
            {country ? renderCountryDetails() : <h2>Loading...</h2>}
        </>
    );
}

export default CountryDetails;