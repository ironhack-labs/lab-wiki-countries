import { Link } from 'react-router-dom'
import CountryDetails from "../CountryDetails/CountryDetails"
import './CountriesList.css'

const CountriesList = ({ countries }) => {

    const sortedCountries = [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))

    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                {
                    sortedCountries.map(country => (
                        <Link
                            key={country.alpha3Code}
                            to={`/${country.alpha3Code}`}
                        >
                            <div className="country">
                                <div className='flagBox'>
                                    <img className="flag" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                                </div>
                                <div className="countryName">
                                    {country.name.common}
                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    )

}

export default CountriesList