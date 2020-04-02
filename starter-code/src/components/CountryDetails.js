import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

const CountryDetails = () => {

    const countryCopy = [...countries]

    return (
        <div>
            <h2>Countries:</h2>

            {countryCopy.map(eachCountry => {
                return (
                    <div key={eachCountry.cca3}>
                        <div class="row">
                            <div className="col-5" key={eachCountry.cca3}></div>
                            <div className="list-group">
                                <h3 className="list-group-item list-group-item-action">
                                    <Link to={`${eachCountry.cca3}`}>{eachCountry.flag} {eachCountry.name.official}
                                    </Link>
                                </h3>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default CountryDetails
