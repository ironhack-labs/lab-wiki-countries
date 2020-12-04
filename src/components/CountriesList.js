import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'

export default class CountriesList extends Component {
  state={
    countries:null
  }
  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
        
          {this.state.countries
            ? this.state.countries.map((country) => {
              
              
            
                return (
                  <Link
                    key={country.cca3}
                    className="list-group-item list-group-item-action"
                    to={{
                      pathname: `/${country.cca3}`,
                      countryList: this.state.countries,
                    }}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.setState({
      countries:countries
    })
  }
}
