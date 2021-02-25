//import countries from './../countries.json'
import { Link } from 'react-router-dom';
import React from 'react'

function CountriesList(props) {
    console.log('lalala', props)
    const countries = props.countries;
    return (
        <div>
            {countries.map((country) => {
                return (
                    <Link to={`/countries/${country.cca3}`}><h3>{country.name.common}</h3></Link>
                )
            })}
        </div>
    )
}

export default CountriesList;

// class CountriesList extends Component {
//     state = {
//         countries: countries
//       }

//     render() {
//         console.log('lalala', this.props)
//         const { countries } = this.state;
//         console.log(countries);
//         const countries = this.props.countries;
//         console.log(countries)
//         return (
//             <div>
//             {countries.map((country) => {
//                 return (
//                     <Link to={`/countries/${country.cca3}`}><h3>{country.name.common}</h3></Link>
//                 )
//             })}
//             </div>
//         )
//     }
// }

// export default CountriesList;