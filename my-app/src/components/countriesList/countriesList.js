import './countriesList.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import countriesApi from '../../countries.json'
import Country from './country'

class List extends Component {
    constructor() {
        super()
        this.state = {
            countries: countriesApi
        }
    }
        
        render(){
            return (
                
                <div className="list">
                {this.state.countries.map((elm, idx) => <Country key={idx} name={elm.name.official} flag={elm.flag} cioc={elm.cioc} cca3={elm.cca3}> </Country>)}
            </div>
            )
        }
    }

export default List