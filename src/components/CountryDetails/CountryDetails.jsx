import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

const CountryDetails = () => {

    const { countrycode } = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countrycode}`)
            .then(({ data }) => setCountry([data]))
    }, [countrycode])

    return (
        <>
            {
                country.map((info, i) => {
                    const flag = info.alpha2Code.toLowerCase()

                    return (
                        < div key={i + 'A'} className="country-details" >
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png`} alt="flag" />
                            <h4>{info.name.official}</h4>
                            <p>Capital: {info.capital}</p>
                            <div>
                                Borders: {info.borders.map(elem => {
                                    return <Link to={`/${elem}`}>{elem} | </Link>
                                })}
                            </div>
                        </div >
                    )
                })
            }
        </>
    )

}

export default CountryDetails