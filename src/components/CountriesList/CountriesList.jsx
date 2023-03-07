import React from 'react'
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
    if (!CountriesList) {
        return "Page loading..."
    }
    return (

        <div className='container'>
            <div className='row'>
                <h2>CountriesList</h2>
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    <div className="list-group">
                        {countries.map((country) => {
                            return (
                                <Link
                                    key={country.name.common}
                                    className="list-group-item list-group-item-action"
                                    to={`countries/${country.alpha3Code}`}>
                                    {country.name.common}
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                                </Link>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CountriesList