import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = 'https://ih-countries-api.herokuapp.com'

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/countries`)
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => {
                console.error('Error', error)
            })
    }, [])

    return (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>

            {countries.map((elm, _id) => (
                <div className="list-group" key={_id}>
                    <Link to={`/${elm.alpha3Code}`}>
                        <img
                            src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                            alt={`${elm.name.common} flag`}
                            width="30"
                            height="20"
                        />
                        {elm.name.common}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HomePage