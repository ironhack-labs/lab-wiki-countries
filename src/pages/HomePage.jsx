import { useEffect, useState } from "react";
import { countriesList } from '../services/countries-service'
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        countriesList()
        .then(countriesElem => {
            setCountries(countriesElem)
            
        })
        .catch(err =>
            console.log(err))
    }, [])

    console.log(countries)
    return(
        <>
            <h1 className="mt-3">WikiCountries: Your Guide to the World</h1>
            { countries.length && 
            countries.map((country) => (
                <Link key={country._id} to={`/country/${country.alpha3Code}`}>

                <div className="mt-4">
                    <div>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                    </div>
                    <div className="country-name">
                    {country.name.official}
                    <hr />
                    </div>
                    
                </div>
                </Link> 
            ))
        }
        </>
    )
}

export default HomePage;
