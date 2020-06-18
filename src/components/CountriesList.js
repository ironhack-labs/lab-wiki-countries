import React from 'react';
import {Link} from 'react-router-dom'
import countries from  '../countries.json'


export default class CountriesList extends React.Component{
    //state is a variable to class that you can change by using this.setState and react will automatically run the render(){} method.

    state = {
        countries: countries
    }
    render(){

        return (
            <>
            <div>
                {
                    this.state.countries.map((country, i) => {
                        return (
                            
                             <Link  to={country.cca3}><div key={i}>
                             <p>{country.flag} </p>
                          <p>{country.name.official}</p>
                          </div></Link>
                            
                        )
                    })
                }
            </div>  
            </>  
        )
            }
        }
