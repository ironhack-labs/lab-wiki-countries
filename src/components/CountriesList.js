import React from 'react';
import countries from '../countries'
import { Link } from 'react-router-dom'


export default class CountriesList extends React.Component {

    state = {
        countries: countries
    }

    componentDidMount(){
        //get api data

    }

    render() {
        return(
        
            <div>
                <nav class="navbar navbar-dark bg-primary mb-3">
                    <div class="container">
                        <a class="navbar-brand" href="/">WikiCountries</a>
                    </div>
                </nav>

                <div class="container">
                <div class="row">

            {
                this.state.countries.map((country, index) => {
                    return (
           
                        <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}} key={index}>
                            <div class="list-group">

                        <Link class="list-group-item list-group-item-action" to={`/countries/${country.cca3}`}>{country.flag} {country.name.official}</Link>
                        
                            </div>
                        </div>
                        
                        )
                })
            }
                </div>
            </div>               
        </div>
    
        )
        
    }


}