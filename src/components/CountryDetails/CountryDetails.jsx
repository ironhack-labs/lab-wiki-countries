import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CountryDetails = (props) => {

    const { countryId } = useParams();
    const countryFound = findCountry(countryId);

    if (!countryFound) {
        return <div className='loading'>Loading...</div>
    }

    function findCountry(alpha3) {
        return props.countries.find((element) => {
            return element.alpha3Code === alpha3
        });
    }

    return (
        <div className='col-7'>
            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLowerCase()}.png`}
                alt="flag"
            />
            <h2>{countryFound.name.common}</h2>
            <table className='table'>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{countryFound.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{countryFound.area}km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {countryFound.borders.map((border) => {
                                    const borderCountry = findCountry(border);
                                    console.log(borderCountry)
                                    return (
                                        <li>
                                            <Link to={`/${border}`}>
                                                {borderCountry.name.common}
                                            </Link>
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


export default CountryDetails