import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './CountryDetails.css'


const CountryDetails = ({ countries }) => {

    const { alpha3Code } = useParams()

    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
            .then(response => {
                setCountry(response.data)
            })
            .catch(err => {
                console.error('---> error:', err)
            })
    }, [alpha3Code])

    // const country = countries.find(country => country.alpha3Code === alpha3Code) --> no longer needed as this 
    // is only for the json and not for the API

    if (!country) {
        return <p>loading...</p>
    }

    return (
        <div class="col-7">
            <h1 className="countryNameMain">{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="tableLabels" style={{ width: "30%" }} >Capital</td>
                        <td>
                            <div className='tableData'>
                                {country.capital[0]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tableLabels">Area</td>
                        <td>
                            <div className='tableData'>
                                {country.area} km
                                <sup>2</sup>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tableLabels">Borders</td>
                        <td>
                            <ul>
                                {
                                    country.borders.map(border => {
                                        const borderCountry = countries.find(c => c.alpha3Code === border)
                                        return (
                                            <li class="borderCountry" key={border}>
                                                <Link to={`/${border}`}>
                                                    <div className="country">
                                                        <div className='flagBox'>
                                                            <img className="flag2" src={`https://flagpedia.net/data/flags/icon/72x54/${borderCountry?.alpha2Code.toLowerCase()}.png`} alt={borderCountry?.name.common} />
                                                        </div>
                                                        <div className="countryName">
                                                            {borderCountry?.name?.common ? borderCountry.name.common : 'none'}
                                                        </div>
                                                    </div>
                                                </Link>
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

export default CountryDetails