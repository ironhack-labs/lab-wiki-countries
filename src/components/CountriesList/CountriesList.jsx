import { Link } from "react-router-dom"
import countriesData from "./../../countries.json"
import { useEffect, useState } from "react"

const CountriesList = () => {

    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch("https://ih-countries-api.herokuapp.com/countries")
            .then(res => res.json())
            .then(data => setCountry(data))
       
    })

    return (
        <div className="CountriesList">
        <h2 className="mt-5 mb-5">Countries List</h2>
            {country.map(elm => {
                return (
                    <div className="container">
                    <div className="row">
                    <div className="col">
                           <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                     </div>
                    <div className="col">
                            <Link to={`/countries/${elm.alpha3Code}`}>{elm.name.common} <br /></Link>  
                    </div>
                </div>
                </div>
           ) })}
    </div>
    )
}

export default CountriesList