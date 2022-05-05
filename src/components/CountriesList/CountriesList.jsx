import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



const CountriesList = ({ countriesData }) => {
    // const [countries, setCountries] = useState([])

    // useEffect(() => {
    //     setCountries(countriesData)
    // }, [])

    return (
        <div>
            <h1>CountriesList</h1>
            {countriesData.map(e => {
                return (
                    <Link key={e.alpha2Code} to={`/${e.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} />
                        <h5>{e.name.common}</h5>
                    </Link>
                )
            })
            }
        </div>

    )
}

export default CountriesList