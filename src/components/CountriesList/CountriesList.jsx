import { useState } from 'react'
import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {

    const [countriesArray, setCountries] = useState(countries)

    return (

        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="list-group">
                        {countriesArray.map(elm => {
                            return (
                                <div>

                                    <Link className='list-group-item list-group-item-action' to={`/${elm.alpha3Code}`} key={elm.alpha3Code}>{elm.name.official}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CountriesList