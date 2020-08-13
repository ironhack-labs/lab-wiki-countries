import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


export default class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countriesList: countries,
    };
  }

  render() {
    console.log(this.state.countries);

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                <div>
                  {this.state.countriesList.map((oneCountry, index) => {
                    return ( 
                        <Link to ={`/${oneCountry.cca3}`}>
                        <p className="list-group-item list-group-item-action">
                          {oneCountry.flag}
                          {oneCountry.name.common}
                          </p>
                          </Link>
                      
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
