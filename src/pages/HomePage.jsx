import { useEffect, useState } from "react";
import { countriesList } from '../services/countries-service'
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        countriesList()
        .then(countriesElem => {
            setCountries(countriesElem)
            setLoading(true)
            
        })
        .catch(err =>
            console.log(err))
    }, [])

    console.log(countries)
    return(
        <>
            <h1 className="mt-3">WikiCountries: Your Guide to the World</h1>
            { !loading ? <h3 className="mt-4">Loading...</h3> :
            countries.map((country) => (
                <Link key={country._id} to={`/country/${country.alpha3Code}`} className="link-country">

                <div className="mt-4">
                    <div>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                    </div>
                    <div className="country-name mt-3">
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
