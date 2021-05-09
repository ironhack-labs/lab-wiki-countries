import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';

export default class CountriesList extends Component {
  state = {
    countriesList: countries,
  };

  displayCountires = () => {
    return (
      <div
        style={{
          maxHeight: '90vh',
          overflow: 'scroll',
        }}
      >
        {this.state.countriesList.map(({ cca2, cca3, flag }) => {
          return (
            <Link key={cca2} to={`/${cca3}`}>
              <div>
                <div className="list-group">
                  <p>{`${flag} ${cca3}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  render() {
    return <div>{this.displayCountires()}</div>;
  }
}
