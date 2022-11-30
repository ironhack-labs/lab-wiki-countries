import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
const CountriesList = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h2>Lista de Países</h2>
            <hr />
            {country.map((elm) => {
                return (
                    <div className="country row">
                        <div className="col-md-6">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <Link to={`/details/${elm.alpha3Code}`}>{elm.name.official}</Link>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default CountriesList