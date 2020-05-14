import React from 'react'
import {Link} from "react-router-dom"
import countries from "./../countries.json"
import CountryDetail from './CountryDetail'

function CountriesList() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <div className="container">
                        <a className="navbar-brand" href="/">WikiCountries</a>
                    </div>
                </nav>
                
                <div className="container">
                    <div className="row">
                        <div className="col-5" > 
                        {/* {style="max-height: 90vh; overflow: scroll;"} */}
                          <div className="list-group" >
                          {countries.map(country => {
                            return ( <Link 
                                        to={`/country-details/${country.cca3}`}
                                        className="list-group-item list-group-item-action"
                                      > {country.name.common} </Link> ) })
                          }
                          {/* <Link className="list-group-item list-group-item-action" to="/country-details/ABW">🇦🇼 Aruba </Link> */}
                          </div>
                        </div>
                        {/* here should go the details! */}
                        {/* <CountryDetail GIVE ME PROPS /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList
