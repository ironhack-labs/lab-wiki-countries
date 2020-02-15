import React, { Component } from 'react';

import json from '../countries.json';


class CountryList extends Component {
  state = {
    countries: json,
  }

  render() {
    let countries = this.state.countries;

    return (
      <div> 
          je suis sur CountryList
      </div>
    );
  }
}

export default CountryList;

