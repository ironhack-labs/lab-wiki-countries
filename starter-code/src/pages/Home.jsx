import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="col-7 homeBox">
        <h1>This is <span className="bold text-primary">WikiCountries</span>, you must click in a menu link to see details about a specific country.</h1>
        <p className="subtitle bold">Enjoy and have fun! <span className="emoji" role="img" aria-label="emoji">😉</span></p>
      </div>
    );
  }
}
