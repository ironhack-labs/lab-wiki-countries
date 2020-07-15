import React from 'react'
import Countries from './countries.json'

import { Link } from 'react-router-dom'

const AllCountries = () => {
    return (
        <>
            <div className="list-group">
            {
                Countries.map((elem, index) => (
                    <Link to={`/country/${elem.cca3}`} key={`${index}:${elem.name.common}`}>
                        <div>
                            <img src={`https://www.countryflags.io/${elem.cca2}/flat/64.png`} alt="" />
                            <div >{elem.name.common}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
        </>
    )
}



export default AllCountries;