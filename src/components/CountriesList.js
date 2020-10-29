import React from 'react'
import {Component} from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Countries from '../countries.json'

class CountriesList extends Component{
    render(){
        console.log(Countries)
        return(
            <div className="col-5" id='country-column' style={{maxHeight:"90vh",overflow:"scroll"}}>
                {Countries.map((country) => 
                <ul key={country.cca2}>
                  <li key={country.cca3}><Link to=''>{country.flag} {country.name.common}</Link></li>
               </ul>
              ) 
                }  
            </div>
        )
    }
}

export default CountriesList
