import React from 'react'
import countries from "../../countries.json";

// class CountryDetails extends Component {
//     CountryDetails = props => {
//         const { id } = props.match.params
//         return id
//     }
//     render() {
//         const country = countries.find(elm => elm.cca3 === id)
//         return (
//             <>
//                 <p>{country.name.common}</p>
//                 <p>{country.capital}</p>
//                 <p>{country.area}</p>
//             </>
//         )
//     }
// }

const CountryDetails = props => {
    const { id } = props.match.params;
    const country = countries.find(elm => elm.cca3 === id);
    return (
        <>
            <p>{country.name.common}</p>
            <p>{country.capital}</p>
            <p>{country.area}</p>
        </>
    )
}

export default CountryDetails