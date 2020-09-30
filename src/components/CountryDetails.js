import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'


 
class CountryDetails extends Component {

    render() {
        console.log('Estas son las props de react-router-dom, pasadas desde el componente App:', this.props)
        // const cca3Country  = this.props.match.params
        // let allCountries = this.props
        // let currentCountry = allCountries.filter(elm => elm.cca3 === cca3Country);
        return (
            <>
                <div className="col-7">
                    a
                    {/* <h1>{currentCountry.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{currentCountry.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{currentCountry.area} km<sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>

                                        <li> {currentCountry.borders.map(elm => <Link to={elm}> f</Link>)}  </li>
                                        
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </>
        )
    }
    }
export default CountryDetails