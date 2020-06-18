import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

countries.sort((a, b) => {
  if (a.name.common < b.name.common) {
    return -1;
  } else if (a.name.common > b.name.common) {
    return 1;
  }
  return 0;
});

export default class CountriesList extends React.Component {
  state = {
    countries: countries,
    activeCountry: 'AFG'
  };

  componentDidMount() {
    let nodeList = document.querySelectorAll(`[href*="/${this.state.activeCountry}"]`)
      console.log(nodeList[0])
      nodeList[0].setAttribute('class', "list-group-item list-group-item-action active")
  }

  handleActive = (e) => {
    e.target.setAttribute('class', "list-group-item list-group-item-action active")

    let country = e.target.getAttribute('href')
    country = country.slice(1);

    this.setState({
      activeCountry: country
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.activeCountry) {
      let code = prevState.activeCountry
      let nodeList = document.querySelectorAll(`[href*="/${code}"]`)
      console.log(nodeList[0])
      nodeList[0].setAttribute('class', "list-group-item list-group-item-action")
    }
  }

  handleUnactive = (e) => {
    console.log(e.target)
  }

  render() {
    let divStyle = {
      maxHeight: '90vh',
      overflow: 'scroll',
    };

    return (
      <div className="col-5" style={divStyle}>
        <div className="list-group">
          {this.state.countries.map((country, index) => {
            return (
              <Link
                key={index}
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
                onClick={(e) => { this.handleActive(e) }}
              >
                {country.flag + '  ' + country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
