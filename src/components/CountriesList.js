import './CountriesList.css'
import {Component} from 'react'
import countries from './countries.json'
import CountriesListCard from './CountriesListCard'
import React from 'react';
import { Link } from 'react-router-dom';


class CountriesList extends Component{
    constructor(){
        super()
        this.state = {
            countries: countries
        }
    }

    render(){

        const countriesCopy = [...this.state.countries]
        console.log(countriesCopy)
        return(

             countriesCopy.map(elm => <CountriesListCard key={elm.cca3} name={elm.name.official} />  )
            
        )
    }
}

 
export default CountriesList

