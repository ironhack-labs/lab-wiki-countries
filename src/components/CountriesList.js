import React from 'react';
import './CountriesList.css'
import {  Link,  } from 'react-router-dom'
import countries from '../countries.json'
import { Component } from 'react'


class CountriesList extends Component {

    constructor (){
        super()
        this.state = {
            countries: countries
        }
    }


    render (){

        return(
            <>
                {this.state.countries.map ((elm, idx) => 
                    <div className = 'container' key= {idx}>
                        <div className = 'row'>
                            <div className = 'col-4 link'>
                                <Link to = '/country-details'>{elm.name.common} {elm.cca3}</Link>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }


}

export default CountriesList
