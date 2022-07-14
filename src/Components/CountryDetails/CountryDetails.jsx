import { useState } from "react"
import { Link, useParams } from "react-router-dom"


const CountryDetails = ({ countries }) => {

    const { alpha3Code } = useParams()
    const foundCountry = countries.find(country => country.alpha3Code === alpha3Code)

    const [currentCountry, setCurrentCountry] = useState(countries)

    return (
        <div style={{ justifyContent:'right', width:'40%', top:'0', right:'0'}}>
            <div>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="" />
                <h1>{foundCountry.name.common}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Capital</p>
                <p>{foundCountry.capital}</p>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Area</p>
                <p>{foundCountry.area}</p>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Borders</p>
                <ul>
                    {foundCountry.borders.map(border => {
                        return (<li>{border}</li>)
                    })}
                </ul>
            </div>





        </div>
    )

}

export default CountryDetails