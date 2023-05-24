import countries from '../../countries.json'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CountriesList() {

    const [country, setCountry] = useState([])

    useEffect(() => {
        setCountry(countries)
    }, [])

    return (
        <div className='container'>
            {
                country.map((elm, index) => {
                    return (
                        <div key={index} className="row">
                            <div className="col-5 countriesList" >
                                <div className="list-group">
                                    <Link to={elm.alpha3Code} className="list-group-item list-group-item-action">
                                        <p>{elm.name.common}</p>
                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default CountriesList