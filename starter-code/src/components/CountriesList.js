import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component{
    render(){
        return (
        <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>

            <div class="list-group">

                {this.props.countries.map((country, i) => (
                    <Link to={`/${country.cca3}`}><a class="list-group-item list-group-item-action">{country.name.official} </a></Link>
                    // <a class="list-group-item list-group-item-action"><Link to={`/${country.cca3}`}>{country.name.official}</Link></a>
                    // <a class="list-group-item list-group-item-action" href={country.cca3}>{country.name.official}</a>
                ))}  

            </div>
        </div>)
    }
}

export default CountriesList; 