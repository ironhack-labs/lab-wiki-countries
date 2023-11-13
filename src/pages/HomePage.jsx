import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function HomePage() {

    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
            setCountries(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    console.log(countries[0])
    return(
        <div>
            <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>

            <div>
                {countries.map((countrieDetails, i) =>{
                    return(
                <Link to={`/${countrieDetails.alpha3Code}`} key={i}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrieDetails.alpha2Code.toLowerCase()}.png`} />
                <p>{countrieDetails.name.common}</p>
                </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;
