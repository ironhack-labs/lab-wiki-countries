import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => setCountries(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1 className="mt-4">WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                { countries.map((country, i) => {
                    return (
                        <Link className="list-group-item list-group-item-action" to={`/${ country.alpha3Code }`} key={ i }>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={ {height: '15px'} } alt="country" />
                            { country.name.common }
                        </Link>
                    )
                }) }
            </div>
        </div>
    )
}

export default HomePage
