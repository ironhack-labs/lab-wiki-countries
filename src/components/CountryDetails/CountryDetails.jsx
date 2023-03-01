import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

const CountryDetails = ({ countries }) => {

    const { id } = useParams()

    const [country, setCountry] = useState({ name: { official: "" }, capital: "", area: 0, alpha2Code: "", borders: [] })

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(({ data }) => setCountry(data))
            .catch(err => console.log(err))
    }, [country])

    const { name, capital, area, borders, alpha2Code } = country

    const flag = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`

    return (
        <div className="CountryDetails">
            <h1>{name.common} <img src={flag} alt={name.common} /></h1>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Borders:</p>
            <ul>
                {
                    borders.map((elm, idx) => {
                        const link = `/${elm}`
                        return (
                            <li key={idx}> <Link to={link}> {elm}</Link></li>
                        )
                    })
                }
            </ul>

        </div>

    )
}
export default CountryDetails