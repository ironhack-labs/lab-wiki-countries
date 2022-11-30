import './CountryDetails.css'
import Countries from '../../countries.json'
import { Link, useParams } from "react-router-dom"
import { useState } from "react"

const CountryDetails = () => {

    const [country, setCountry] = useState(Countries)
    const { alpha3Code } = useParams()
    const findCountry = country.find(elm => elm.alpha3Code === alpha3Code)


    const [border, setBorder] = useState(findCountry.borders)


    return (
        <div className='CountryDetails container'>
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1>{findCountry.name.common}</h1>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Capital:</strong> {findCountry.capital}</li>
                        <li className="list-group-item"><strong>Area:</strong> {findCountry.area}</li>
                        <li className="list-group-item"><strong>Borders:</strong>
                            <ul>
                                {findCountry.borders.map((elm, i) => {
                                    return <li key={i}>{elm}</li>
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default CountryDetails