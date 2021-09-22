import React from 'react'
import countries from '../../countries.json'
import './CountriesList.css'
import { Link } from 'react-router-dom'

class CountriesList extends React.Component{

    state = {
        countriesList: countries
    }

    displayCountries = () => {

        return (
            this.state.countriesList.map(country => <Link className='list-group-item list-group-item-action' to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>)
        )
    }

    render(){
        
        return(
            
            <div className='col-5 scroll'>
                <div className="list-group">
                    {this.displayCountries()}
                </div>
            </div>
        )
    }
}

export default CountriesList