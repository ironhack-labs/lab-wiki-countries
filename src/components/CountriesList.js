import React from 'react';

import { Link } from 'react-router-dom';
import countries from '../countries.json';
class CountriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { countries: countries };
  }
  render() {
    return this.state.countries.map((eachCountry) => {
      return (
        <div key={eachCountry.cca3}>

        <Link to={'/countries/${eachCountry.id}'}><h3>{eachCountry.name.common}</h3></Link>
       

        </div>
      );
    });
  }
}

export default CountriesList;
