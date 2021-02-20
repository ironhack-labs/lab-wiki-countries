import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList(props) {
    return <div className='row'>
        <div className='col-5'>
            <div class="list-group">
                {
                    props.countries.map((country) => {
                        return <Link className="list-group-item list-group-item-action" to={`/country/${country.cca3}`}>
                            {country.flag} {country.name.common}
                        </Link>  
                    })
                }
                
            </div>
        </div>
    </div>
}

export default CountriesList