import React, { Component } from 'react';
import countries from './countries.json';
import CountryDetail from './CountryDetail.js'
import { Link, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


export class Country extends Component {

 render() {
    return (
        <div>
        <Router>
          <div>
            <div className="row">
            <div className="list-group col-5 pre-scrollable">
              {countries.map((country, index) => {
                return (
                  <div key={index} className="list-group-item list-group-item-action">
                    <Link to={"/country/" + country.cca3}>
                      <div> 
                      {country.flag} {country.name.common}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="col-7">
            <Route path="/country/:cca3" countries={countries} component={CountryDetail} />
            </div>
          </div>
        </div>
        </Router>
      </div>
        );
    }
}

export default Country;