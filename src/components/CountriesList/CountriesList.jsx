import { useState } from "react"
import { Link } from 'react-router-dom'

const CountriesList = ({ countriesData }) => {

    const [countries, setCountries] = useState(countriesData)

    return (
        <>
            <div className="col-5" style={{ textAlign: 'center', maxHeight: '90vh', overflow: 'scroll' }}>
                <div className="list-group">
                    {
                        countries.map(country => {

                            return (
                                <Link className="list-group-item list-group-item-action" to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag image' /><br />
                                    {country.name.common}
                                </Link>)
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CountriesList