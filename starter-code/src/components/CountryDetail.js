import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'


const getCountry = (cca3) => {
    let pais = countries.find(pais => {
        return pais.cca3 == cca3
    })

    return pais.name.common
} 


const CountryDetail = (props) => {
    const { params } = props.match
    
    const paisEncontrado = countries.find(pais => {
        return pais.cca3 == params.cca3
    })

    return(
        <div>
            <h2>{paisEncontrado.name.common}</h2>
            <hr />
            <p>Capital: <span>{paisEncontrado.capital[0]}</span></p>
            <hr />
            <p>Area: <span>{paisEncontrado.capital[0]}</span></p>
            <hr />
            <p>Borders: <span>{paisEncontrado.borders.map((border, index)=> {
                return(
                <div key={index}>
                        <Link to={`/countries/${border}`} >{getCountry(border)}</Link>
                </div>)
            })}</span></p>
        </div>
    )
}

export default CountryDetail