import React from 'react'
import {Component} from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
//import Countries from '../countries.json'
import CountryDetails from './CountryDetails'


export default function CountriesList(props){
    return(
        <div className="col-5" id='country-column' style={{maxHeight:"90vh",overflow:"scroll"}}>
        {props.countries.map((country) => 
         <ul key={country.cca2}>
             <li key={country.cca3}><Link to={`/country/${country.cca3}`}>{country.flag} {country.name.common}</Link></li>
       </ul>
        )}
       </div>
    )
}


{/* class CountriesList extends Component{
    render(){
        return(
            <div className="col-5" id='country-column' style={{maxHeight:"90vh",overflow:"scroll"}}>
                {Countries.map((country) => 
                <ul key={country.cca2}>
                  <li key={country.cca3}><Link to={`/country/${country.cca3}`}>{country.flag} {country.name.common}</Link></li>
               </ul>
              ) 
                }  
                <div className='container-right'>
                <Route path='/country/:countryId' render={(props) => <CountryDetails {...props} countries={Countries}/>}/>
                </div>
            </div>
              
           

        )
    }
}  */}


