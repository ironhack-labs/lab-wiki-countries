import React, { Component } from 'react';
import './CountriesList.css';
import { Route, Link, Switch } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div className="list-group">
        {this.props.countries.map((el) => (
          <Link to={`/${el.name.common}`}>{el.name.common}</Link>
        ))}
      </div>
    );
  }
}

export default CountriesList;
