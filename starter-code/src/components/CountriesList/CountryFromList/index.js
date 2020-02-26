import React from 'react'
import './countryFromList.css'
import { Link } from 'react-router-dom'

const CountryFromList = props => {
    return (
        <Link to={ '/details/' + props.cca3 }>
            <div className='country'>
                <figure><img src={ 'https://www.countryflags.io/' + props.cca2 + '/flat/64.png' } alt='broke'></img></figure>
                <h6>{ props.name.common }</h6>
            </div>
        </Link>

    )
}


export default CountryFromList