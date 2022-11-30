import { Link } from "react-router-dom"
// import Countries from "../../countries.json"
import { useState, useEffect } from 'react'



const CountriesList = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))
    }, [])




    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        {countries.map((elm) => {
                            return <div key={elm.alpha3Code}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                                <Link to={`/${elm.alpha3Code}`} className="list-group-item list-group-item-action"
                                >{elm.name.common}</Link>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CountriesList