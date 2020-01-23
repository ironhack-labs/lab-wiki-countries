import React, {Component} from 'react';
import countries from '../countries.json';


class CountryDetail extends Component {
    constructor(props) {
        super(props);
    }
        render() {

            const oneCountry  =   countries.filter(country => country.cca3 === this.props.match.params.cca3)[0]       
        
            return (
                <div>
            
                <h1>{oneCountry.name.common}</h1> 
                <h3>Capital: {oneCountry.capital}</h3>
                <h3>Area: {oneCountry.area}</h3>
                <h3>Borders: {oneCountry.borders}</h3>
            
            </div>
            )
    }
} 

    console.log(countries[0])






//     return (
//         <div>
            
//             {/* <h1>{oneCountry.name}</h1> 
//             <h3>Capital: {oneCountry.capital}</h3>
//             <h3>Area: {oneCountry.area}</h3>
//             <h3>Borders: {oneCountry.borders}</h3> */}
//         </div>
//     )


export default CountryDetail;