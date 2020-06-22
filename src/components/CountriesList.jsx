import React from 'react';
import countries from '../countries.json';
import { Link, Route } from 'react-router-dom';
import CountriesDetail from './CountriesDetail';
import './CountriesList.css'

function CountriesList() {
    return (
      <div className="container">
        <div className="row">
          <div className="countrieslist col-5">
            <div className="list-group">
              {
                countries.map(country => 
                  <Link className="list-group-item list-group-item-action" to={`/country/${country.cca3}`}>
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.name.common}/>
                    {country.name.common}
                  </Link>
                )
              }
            </div>



            {/* <table className="table table-bordered">
              <tbody>
                {
                  countries.map(country => 
                    <tr>
                      <td className="country-basic-info">
                        <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.name.common}/>
                        <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                      </td>
                    </tr> 
                  )
                }
              </tbody>   
            </table> */}
          </div>
          <div className="col-7">
            <Route path="/country/:id" component={CountriesDetail} />
          </div>        
        </div>
      </div>
      
    );
}
  
export default CountriesList;