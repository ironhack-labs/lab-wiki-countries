import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiCountriesURL = "https://ih-countries-api.herokuapp.com/countries"
const flagURL = "https://flagpedia.net/data/flags/icon/72x54/"


function HomePage(props) {
    const [countries, setCountries] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get(apiCountriesURL).then((response) => {
            setCountries(response.data)
            setFetching(false)
        })

    }, [])

    return (
        <div className="container" style={{
            maxHeight: '90vh', overflow: 'scroll'
        }}>
            <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
            <ul className="list-group">
                {fetching ? <p>Loading...</p> : countries.map(country => {
                    return (
                        <a key={country._id} className="list-group-item list-group-item-action" href={`/${country.alpha3Code}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={flagURL + country.alpha2Code.toLowerCase() + '.png'} alt="country flag" />
                                    </div>
                                    <div className="col-12">
                                        {country.name.common}
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </ul>
        </div >
    )
}

export default HomePage;
