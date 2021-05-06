import { Component } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// class CountryDetails extends Component {
//     constructor() {
//         super()
//     }

//     //  props.match.params.id,




//     render() {

const CountryDetails = props => {
    let data = props.location.state.country
    let countries = props.location.state.countries
    return (
        <div className="col-7">
            <h1>{data.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="head">Capital</td>
                        <td>{data.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {data.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    data.borders.map(elm => {

                                        const foundCountry = countries.find(country => {
                                            if (country.cca3 === elm) {
                                                return country//.name.common[0]
                                            }
                                        })//.name.common
                                        //console.log(countries.filter(country => country.cca3 === elm))

                                        return (<li><Link key={elm.cca3} to={{ pathname: `/details/${elm.cca3}`, state: { country: foundCountry, countries } }}>{
                                            foundCountry.name.common
                                        }</Link></li>)
                                    })


                                }


                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
//}


// const CountryDetails = props => {
//     console.log(props.match.params.id, props.location.state.country);
//     return (
//         "Hola"
//     )
// }

export default CountryDetails