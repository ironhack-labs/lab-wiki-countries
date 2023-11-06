import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"


function HomePage() {
    const [countries, setCountries] = useState([])
    const countriesAPI = "https://ih-countries-api.herokuapp.com/countries"
    const [fetching, setFetching] =  useState(true)

    useEffect(()=>{
        axios.get(countriesAPI).then((countries)=>{
            setCountries (countries.data)
            setFetching(false)
        })
    })

    return(
        <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
            {fetching? <p>Loading...</p> :
                        countries.map((country)=>{
                            return(
                            <div key={country._id}>
                            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                                <p>{country.name.official}</p>
                            </Link>
                            </div>
                            )
                        })}
                </div>
        </div>
    )
}
export default HomePage;
