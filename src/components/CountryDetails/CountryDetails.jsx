import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countriesData }) => {

    const [countries, setCountries] = useState(countriesData)

    const { alpha3Code } = useParams()

    const foundCountry = countries.find(elm => elm.alpha3Code === alpha3Code)


    return (
        <>
            <div class="col-7" >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt='flag image' /><br />
                <h1>{foundCountry.name.common}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: '30%'}}>Capital</td>
                            <td>{foundCountry.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {foundCountry.borders.map(elem =>  
                                        <li><Link to={`/country/${elem}`}>{elem}</Link></li>
                                        )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default CountryDetails