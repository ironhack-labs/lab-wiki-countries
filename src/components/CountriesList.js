import React from 'react'
import { Link } from 'react-router-dom'
import './styles/CountriesList.css'

const countriesList = (props) => {

    const renderList = () => {
        return props.countries.map((country,index) => {
            return(
            <Link key={index} className='list-group-itel list-group-item-action' to={ `/${country.cca3}`}>
            {country.flag} {country.name.common}
            </Link>
            )
        })
    }

    return (
        <div id='list' className='col-5'>
            <div className='list-group'>
            {renderList()}
            </div>
        </div>
    )
}

export default countriesList