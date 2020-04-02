import React from 'react';
import countries from '../countries.json'
import CountryDetail from './countryDetail';
import {Link, Route} from 'react-router-dom';




function CountryWiki() {
    return (
      <div className="container">
          <div className="row">
                <div className="col-5 country-list" max-width="90vh">
                    <ul className="list-group">
                        {countries.map((country) => 
                            <li className= "list-group-item list-group-item-action">
                                <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt=""/>
                                <h2 >
                                    <Link to={`/country-detail/${country.cca3}` }>{country.name.common}</Link>
                                </h2> 
                            </li>
                                
                        )}
                    </ul>
                </div>
              
                <div className="col-7 country-detail">
                    <Route path='/country-detail/:cca3' component={CountryDetail}/>
                </div>
          </div>
        
      </div>
    );
  }
  
  export default CountryWiki;