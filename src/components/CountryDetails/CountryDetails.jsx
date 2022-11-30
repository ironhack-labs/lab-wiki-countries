import './CountryDetails.css'
import Countries from '../../countries.json'
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const CountryDetails = () => {

    // const [country, setCountry] = useState(Countries)
    // const findCountry = country.find(elm => elm.alpha3Code === alpha3Code)

    const { alpha3Code } = useParams()
    const [countryDetails, setCountryDetails] = useState()



    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
            .then(res => res.json())
            .then(data => { setCountryDetails(data) })
    }, [`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`])

    console.log(countryDetails)




    return (
        <div className='CountryDetails container'>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails?.alpha2Code.toLowerCase()}.png`} alt={`${countryDetails?.name.common} flag`} />
                    <h1>{countryDetails?.name.common}</h1>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Capital:</strong> {countryDetails?.capital}</li>
                        <li className="list-group-item"><strong>Area:</strong> {countryDetails?.area}</li>
                        <li className="list-group-item d-flex justify-content-center"><strong>Borders:</strong>
                            <ul>
                                {countryDetails?.borders.length > 0 ? countryDetails?.borders.map((elm, i) => <li className='borderList' key={i}><Link to={`/${elm}`}>{elm}</Link></li>) : "There aren't borders in this country"}

                            </ul>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default CountryDetails