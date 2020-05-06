import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../../../countries.json'


    const CountriesDetails = (props) => {

        const foundCountries = countries.find(elm => props.match.params.id === elm.cca3)


        return (
            <>


                <div className="card" >
                    <div className="card-body">
                        <h2 className="card-title">{foundCountries.name.common}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">{foundCountries.capital}</h3>
                        <p className="card-text">Superficie{foundCountries.area} KM^2</p>
                        <ul className="list-group"> Fronteras: {foundCountries.borders.map((elm, idx) =>
                            <li key={idx}>          
                                <Link className="list-group-item list-group-item-primary" key={elm.cca3} to={elm}> 
                                    
                                    {countries.find(country => country.cca3 === elm).name.common}
                                    {countries.find(country => country.cca3 === elm).flag}
                                </Link>
                            </li>)}

                        </ul>
                    </div>
                    <Link to='/countries'>Volver</Link>
                </div>

            
            </>
        )
    }

export default CountriesDetails