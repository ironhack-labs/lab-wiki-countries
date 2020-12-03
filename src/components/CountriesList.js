import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import countries from './../countries.json';

export default class CountriesList extends Component {
  state = {
    lands: countries,
  };
  render() {
    const { lands } = this.state;
    return (
      <div>
        <h1>CountireList Component</h1>
        {lands.map((countrie, i) => {
          return (
            <Link key={i} to={`/project/${countrie.name.common}`}>
              <p>{countrie.name.common}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
