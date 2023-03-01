import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {
    const { alpha3Code } = useParams()

    // const country = countries.filter(elm => elm.alpha3Code === alpha3Code)
    // const { name, capital, borders, alpha2Code } = country[0]

    const [country, setCountry] = useState({ name: { official: "" }, capital: "", alpha2Code: "", borders: [] })

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`).then(({ data }) => setCountry(data))

    }, [country])

    const { name, capital, borders, alpha2Code } = country


    const flagSrc = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`

    return (
        <div>
            <h1>{name.official}</h1>
            <h3>Capital:{capital}</h3>
            <img src={flagSrc} alt="flag" />
            <h3>Borders:</h3>
            <ul>
                {
                    borders.map(elm => {
                        const link = `/countriesList/${elm}`
                        return <li key={elm}><Link to={link} >{elm}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default CountryDetails