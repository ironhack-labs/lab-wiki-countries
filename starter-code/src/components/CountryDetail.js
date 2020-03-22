import React, { Component } from 'react';
import data from './countries.json';

export class CountryDetail extends Component {
  state = {
    countries: [...data]
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default CountryDetail
