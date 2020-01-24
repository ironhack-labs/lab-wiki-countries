import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, cca3, flag, borders } = this.props.countries;
    const isBorder = this.props.isBorder;
    return (
      <div>
        {isBorder 
        ? 
        borders.map(border => {
          let isBorderCountry = countries.filter(country => country.cca3 === border)[0]
          return <li><Link key={`bd${cca3}${border}`} to={`/${isBorderCountry.cca3}`}> {isBorderCountry.name.common} </Link></li>
        }) 
        :
        <Link key={cca3} to={`/${cca3}`}> {flag} {name.common} </Link>}
      </div>
      )
    }
  }

export default CountryLink;