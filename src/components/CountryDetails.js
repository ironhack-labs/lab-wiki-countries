import React from 'react'
import { useParams, Link } from "react-router-dom";

function CountryDetails({ countries }) {
    const { countryId } = useParams();
    const getCountryByAlpha3 = countryCode => countries.find(country => country.alpha3Code === countryCode)
    const borderLinks = borders => borders.map((borderItem) => {
        const borderCountry = getCountryByAlpha3(borderItem);
        return (
            <li>
                <Link to={`/${borderCountry.alpha3Code}`} >
                    {borderCountry.name.common}
                </Link>
            </li>
        )
    });

    const foundCountry = getCountryByAlpha3(countryId);

    return (
        <div className="col-7 country-detail-box">
            {!foundCountry && <h3>Country not found!</h3>}
            {foundCountry && (
                <>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} width="250px" alt="" />
                    <h1>{foundCountry.name.common}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Capital:</b></td>
                                <td>{foundCountry.capital}</td>
                            </tr>
                            <tr>
                                <td><b>Area:</b></td>
                                <td>{foundCountry.area}
                                    <sup>2</sup></td>
                            </tr>
                            <tr>
                                <td className="name-top"><b>Borders:</b></td>
                                <td>
                                    <ul>
                                        {borderLinks(foundCountry.borders)}
                                    </ul>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )
            }
        </div >
    );
}

export default CountryDetails;