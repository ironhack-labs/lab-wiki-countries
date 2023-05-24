import { Link } from 'react-router-dom'
import './CountriesList.css'
import { useState } from 'react'

export default function CountriesList({countries}) {

    return (
        <div className="container">
            <div className='row'>

             {countries.map((elm, index) => {
                let lowerAlpha2Code = elm.alpha2Code.toLowerCase()
                return ( 
                <Link to={`/${elm.alpha3Code}`} key={index} className='col-3 d-flex flex-column align-items-center text-decoration-none' id='countriesList__body--countryCard'>
                    <h1 className='text-dark'>{elm.name.common}</h1>
                    <img className='w-50' src={`https://flagpedia.net/data/flags/icon/72x54/${lowerAlpha2Code}.png`} alt="country flag"/>
                </Link>
                )
            })}

            </div>
        </div>
    )

}