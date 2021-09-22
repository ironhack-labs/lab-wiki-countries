import React from 'react'
import { Link } from 'react-router-dom'
import Country from './../../countries.json'
import './CountriesList.css'




export default class CountriesList extends React.Component {

    state = {
        countri: Country
    }

    displayCountry = () => {

        const limitedList = this.state.countri

        return (
            limitedList.map((paint, idx) => {
                return (
                    
                    <div className='row'>
                        <div className='col-12' >
                            <div className='list-group'>
                            <Link to={`/country-details/${paint.cca3}`}>
                                <p>{paint.flag}{paint.name.common}</p>
                            </Link>
                            </div>
                        </div>
                    </div>

                )
            })
        )
    }

    render() {
        return (
            <div className='row col-6'>
                {this.displayCountry()}
            </div>
        )
    }
}
