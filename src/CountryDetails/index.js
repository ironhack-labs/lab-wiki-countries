import React, { Component } from 'react';

class CountryDetails extends Component {
  render() {
    const { code } = this.match.params;
    return <h1>{code}</h1>;
  }
}
export default CountryDetails;
