import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries/').then((allCountries) => {
            setCountries(allCountries.data)
            console.log(allCountries)
        })

        console.log(countries)
    }, [])

    return (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <div className="countries-container">
                {countries.map((country) => {
                    return (
                        <Link    style={{ textDecoration: 'none' }}
                                 key={country.name.common} 
                                 to={`/${country.alpha3Code.toLowerCase()}`}>

                            <div className="countryName" >{country.name.common} <img className="flagImg" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag' /></div>

                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
