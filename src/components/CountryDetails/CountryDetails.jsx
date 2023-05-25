import { useState } from "react";
import countriesList from "../../countries.json"
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
    const { idCountry } = useParams()

    const selectedCountry = countriesList.find(({ alpha2Code }) => alpha2Code === idCountry)
    const { name, capital, area, borders } = selectedCountry

    let imgCode = `https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`

    return (<div className="detail">
        <img src={imgCode} alt="" />
        <h1>{name.official}</h1>
        <table>
            <tr>
                <td><strong>Capital: </strong></td>
                <td>{capital}</td>
            </tr>
            <tr>
                <td><strong>Area: </strong></td>
                <td>{area} Km^2</td>
            </tr>
            <tr>
                <td><strong>Bordes: </strong></td>
                <td><ul>
                    {borders.map((elem) => {
                        let borderCountries = countriesList.find(({ alpha3Code }) => { return alpha3Code === elem })
                        console.log(borderCountries)

                        return (
                            <li>
                                <Link to={`/CountryDetail/${borderCountries.alpha2Code}`}>{borderCountries.name.official}</Link>
                            </li>
                        )
                    })}
                </ul></td>
            </tr>
        </table>

    </div>
    )
}



export default CountryDetails;