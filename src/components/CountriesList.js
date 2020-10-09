import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  } 

  componentDidMount() {
    axios.get("https://countries.tech-savvy.tech/countries")
    .then(response => {
        this.setState({countries: response.data})
    })
}


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.state.countries.map((country) => (
                <Link
                  key={country.cca3}
                  to={'/' + country.cca3}
                  className="list-group-item list-group-item-action"
                >
                  {country.flag} {country.name.common}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
