import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import countriesData from '../countries.json';
import './CountryDetails.css'

function CountryDetails() {

    const [country, setCountry] = useState(null)
    // PUEDES PREDEFINIR LA ESTRUCTURA DE TU OBJETO!!
    const { alpha3Code } = useParams()

    useEffect(() => {
        const selectedCountry = countriesData.find((country) => country.alpha3Code === alpha3Code)

        setCountry(selectedCountry)
    }, [alpha3Code])



    return (
        <div className='details'>
            {
                country ?
                    <>
                        <h1>{country.name.common}</h1>
                        <ul>
                            <li>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} />
                            </li>
                            <li>Capital: {country.capital}</li>
                            <li>Region: {country.region}</li>
                            <li>Area: {country.area} </li>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country.borders.map(country => {
                                            return (
                                                <p>{country}</p>

                                            )
                                            //    <li key={country.borders}>
                                            //         <a href="${country.borders">{country.borders}</a>
                                            //     </li>
                                        }
                                        )}

                                    </ul>
                                </td>
                            </tr>
                        </ul>
                    </>
                    :
                    <h1>Holaaaaaaaaaaa</h1>
            }
        </div>
    )

}

export default CountryDetails