import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {

    const [country, setcountry] = useState({})
    const [loading, setloading] = useState(true)

    const { code } = props.match.params;
    const countries = props.countries

    useEffect(() => {
        setcountry(countries.find(c => c.alpha3Code === code))
        setloading(false)
    }, [country, code, countries])

    return (
        <>
            { loading
                ? 'Loading data...'
                : <div>
                        <h1>{country.name}</h1>
                        <hr />
                        <p> <strong>Capital: </strong> {country.capital} </p>
                        <p> <strong>Area: </strong> {country.area} Km2 </p>
                        <p> <strong>Borders: </strong> </p>
                        <ul>
                            { country.borders.length > 0
                                ? country.borders.map(b => {
                                        return ( <li key={b}>
                                            <Link to={`/${b}`}>{ countries.find(c => c.alpha3Code === b).name }</Link>
                                        </li> )
                                    }) 
                                : 'No borders'
                            } 
                        </ul>
                    </div>
            }
        </>
    )
}

export default CountryDetails
