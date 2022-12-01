import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const CountryDetails = ({ countries }) => {

    const [country, setCountry] = useState(undefined)
    const [loading, setLoading] = useState(true);
    const { idCountry } = useParams();

    useEffect(() => {
        const findCountry = countries.find((country) => country.alpha3Code === idCountry)
        setCountry(findCountry)
        setLoading(false);
    }, [idCountry])

    return (
        <>
            {loading ? <p>Loading...</p> :
                < div className="col-7" >
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
                    < h1 > {country.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {
                                            country.borders.map((borderCountry, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink to={`/${borderCountry}`} className="list-group-item list-group-item-action">{borderCountry}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div >
            }
        </>
    )
}

export default CountryDetails