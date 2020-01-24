import React, {Component} from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';

// import Borders from './Borders'


class CountryDetail extends Component {
    constructor(props) {
        // console.log(props, 'aaaaa')
        super(props);
    }
    render() {
        
        const oneCountry  =   countries.filter(country => country.cca3 === this.props.match.params.cca3)[0]       
        // console.log(this.props.params)
        
            return (
                <div>
            
                <h1>{oneCountry.name.common}</h1> 
                <h3>Capital: {oneCountry.capital}</h3>
                <h3>Area: {oneCountry.area}</h3>
                <div>
                {oneCountry.borders.map((item) =><li><Link to={`/${item}`}>{item}</Link></li> )}
                </div>

            
            </div>
            )
    }
} 




export default CountryDetail;