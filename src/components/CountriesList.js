import React, { Component } from 'react';
//importamos el componente dónde estará cada detalles
//importamos el JSON con los datos
import countries from './../countries.json';
import OneCountry from './OneCountry';


class CountriesList extends Component {
  state = {
    countriesList : countries
  }

  render() {
    return (
        <div>
          <nav className ="navbar navbar-dark bg-primary mb-3">
            <div className ="container">
              <a className ="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container position">
            <div className="row">
              <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <div className="list-group">
                  {countries.map( (oneCountry, index) => {
                    return <OneCountry country={oneCountry} key={index} />
                  })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CountriesList;