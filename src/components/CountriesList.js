import React, { Component } from 'react'
import logo from '../logo.svg';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

class CountriesList extends Component { 

    render() {


        return (
            <div>
                {
                    this.props.countries.map((country, i) => {
                        return (
                        <div class="overflow-auto" key={i}><p>
                            <img src={country.flag} alt="flag" style={{width: '20px'}}/>
                              <Link to={`/country-details/${country.alpha3Code}`} >{country.name}</Link></p>
                              </div>)

                    })
                }
            </div>
        )
    }
}
export default CountriesList;