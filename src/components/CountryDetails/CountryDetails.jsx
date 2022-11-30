import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
// import countriesData from '../../countries.json'
import './CountryDetails.css'

function CountryDetails() {

    const [countries, setCountriesDetails] = useState([])

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries`)
            .then(res => res.json())
            .then(countriesData => setCountriesDetails(countriesData))
    }, [])


    const { country_id } = useParams()
    const foundCountry = countries?.find(country => country.alpha3Code === country_id)


    return (
        <div className="details">
            <h1>{foundCountry?.name.common}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry?.alpha2Code.toLowerCase()}.png`} alt="flag" />
            <hr />
            <div className="fronteras">
                <h5>Fronteras</h5>
                {foundCountry?.borders.map((nercountry, index) => {
                    return (
                        <h5 key={index}>
                            <Link to={`/${nercountry}`}>{nercountry}</Link>
                        </h5>
                    )
                })}
            </div>
        </div >

    );
}

export default CountryDetails