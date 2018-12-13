import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import countryDetail from '../Components/countryDetail'

const CountryList = () => {

    return(
        <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                  
                  {countries.map(country => {
            return (
                
                <Link to={`/country/${country.cca3}`}>
                <p className="list-group-item list-group-item-action">{country.flag}{country.name.common}</p>
                </Link>
                

               
            )
        })}
                </div>
              </div>
             

            <countryDetail/>




            </div>
          </div>
        </div>
      </div>
    )
}
export default CountryList