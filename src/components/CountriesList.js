import React, {Component} from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class CountriesList extends Component {

    state ={
        countries: countries 
    }

    renderCountries() {
        return this.state.countries.map((country, index) => {
           
            return (
                <>
        
                  <div key={index}>
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.name.common} />
                    <Link to={`/${country.cca3}`}>{country.name.common}</Link>
                  </div>
                </>

            )
        }
    )
    }

    render(){
        return (
        <> 
                {this.renderCountries()}
        </>
        )
    }
    }

export default CountriesList