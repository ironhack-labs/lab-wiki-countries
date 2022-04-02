import React, { useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { getCountry } from '../../services/CountriesServices'
import './CountryDetails.scss'

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
                <div className='container-details'>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                    <div>
                        <h2>{country.name.common}</h2>
                        <div className='card-body'>
                            <p><strong>Capital:</strong> {country.capital[0]}</p>
                            <p><strong>Area</strong>: {country.area}km2 </p>
                            {
                                borders.length > 0 ? 
                            <div id='wrap-borders'> <strong>Borders:</strong> {
                                borders.map(borderCountry => {
                                    return (
                                        <div key={borderCountry._id}>
                                            <Link to={`/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</Link>
                                        </div>
                                    )
                                })
                            }</div>
                            : 
                            <p> <strong>Borders:</strong> None</p>
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default CountryDetails