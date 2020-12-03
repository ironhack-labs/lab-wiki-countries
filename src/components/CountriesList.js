import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class CountriesList extends Component {
  render() {
    return (
      <div>
        <h1>CountireList Component</h1>
        {this.props.countries.map((countrie, i) => {
          return (
            <Link key={i} to={`/project/${countrie.name.common}`}>
              <div>
                <span>{countrie.flag}</span>
                <p>{countrie.name.common}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
