import React, { useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { getCountry } from '../../services/CountriesServices'

const CountryDetails = () => {
    const { id } = useParams()
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(true)
    const [borders, setBorders] = useState([])
 
    useEffect(() => {
        getCountry(id)
            .then((country) => {
                setCountry(country)
                setLoading(false)
            })
        window.scrollTo(0, 0)
     
    }, [id])

    useEffect(() => {
        if (country) {
           const promises =  country.borders.map(border => getCountry(border));

           Promise.all(promises)
            .then(countryBorders =>  setBorders(countryBorders))
        }
    }, [country])

    return(
        <>
            {loading ? 'Loading...' : (
                <div>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                    <div>
                        <h2>{country.name.common}</h2>
                        <div>
                            <p>Capital: {country.capital[0]}</p>
                            <p>Area: {country.area}km2 </p>
                            <p>Border: {
                                borders.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <Link to={`/${el.alpha3Code}`}>{el.name.common}</Link>
                                        </div>
                                    )
                                })
                            }</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default CountryDetails