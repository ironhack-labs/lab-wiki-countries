import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function HomePage() {
    const [countryList, setCountryList] = useState("")

    useEffect(() => {
            const apiURL = "https://ih-countries-api.herokuapp.com"
        
            axios.get(apiURL)
            .then((countryList) => setCountryList(countryList.data))
            .catch((err) => console.error(err))
    }, [])

    return(
        <div className="container-fluid">
            <h1 className="margin-heading ava-font-dark"> Your portal to the world</h1>
            <div className='countryList-wrapper container'>
                    {countryList.map((eachCountry) => {
                        return(
                            <Link 
                            key={eachCountry.alpha3Code}
                            to={`/${eachCountry.alpha3Code}`}
                            className='countryList-item-wrapper list-group-item list-group-item-action'
                            > 
                            <img
                            width="50"
                            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={`flag-of-${country.name.common}`}
                            />
                            <p>
                                {eachCountry.name}
                            </p>
                            </Link>
                        )
                    })}
            </div>
            
        </div>
    )
}

export default HomePage;
