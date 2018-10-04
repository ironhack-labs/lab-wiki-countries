import React, { Component } from 'react';
import countriesList from './countries.json';
import CountryDetail from './CountryDetail.js'
import { Link, Route } from 'react-router-dom';


export class Country extends Component {

 render() {
    return (
        <div className="list-group col-5 pre-scrollable">
            {countriesList.map((country, index) => {
                return (
                    <div key={index} className="list-group-item list-group-item-action">
                  <Link to={'/country/' + country.cca3}><div><spam>{country.flag}</spam>{country.name.common}</div></Link>
                </div>
                    )
                 })}
                 <div>
              <Route path="/country/:cca3" component={CountryDetail} />
            </div>
        </div>
        );
    }
}

export default Country;