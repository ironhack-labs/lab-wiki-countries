import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const [countries, setCountries] = useState([])

    const dynamicParams = useParams();
    // console.log(dynamicParams);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
            // console.log(response)
            setCountries(response.data)
        })
    }, [])

    
    const foundCountry = countries.find((eachCountry) => {
        if(eachCountry.alpha3Code === dynamicParams.countryId) {
            return true;
        } else {
            return false;
        }
    })
    
    if(!foundCountry) {
        return <p>Loading...</p>
    }

    return(
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

            <h1>{foundCountry.name.common}</h1>

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {foundCountry.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {foundCountry.borders.map((eachBorder, i) => {
                                    return(
                                        <Link to={`/${eachBorder}`} key={i}>
                                            <li>{eachBorder}</li>
                                        </Link>
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

export default CountryDetails;
