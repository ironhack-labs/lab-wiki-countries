import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Country extends Component {
  render() {
    const { name, cca3, flag } = this.props
    return (
      <div>
        <h1>{ flag }</h1>
        <h3>{ name }</h3>
        <Link to={`/${cca3}`} >See More</Link>
      </div>
    );
  }
}

export default Country;