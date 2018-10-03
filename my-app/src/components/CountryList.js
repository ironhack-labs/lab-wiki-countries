import React from 'react';
import { Link, Route } from 'react-router-dom';
import countries from '../countries.json';
import CountryDetail from './CountryDetail'


export default class CountryList extends React.Component {
  render() {
    return (
      <div className="container border">
        <div className="list-group">
          <span className="list-group-item list-group-item-action" style={{backgroundColor:"#48C9B0", color:"white"}}>WikiCountries</span>
          <div className="row">
            <div className="col-5 pre-scrollable">
              {countries.map((c, i) => (
                <div className="list-group-item list-group-item-action" key={i}>
                  <Link to={'/country/' + c.cca3}><div><spam>{c.flag}</spam>{c.name.common}</div></Link>
                </div>
              ))}
            </div>
            <div className="col-7">
              <Route path="/country/:cca3" countries={countries} component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

