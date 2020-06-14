import React from 'react';
import countries from '../countries.json'
import _ from 'lodash'
import { Link } from 'react-router-dom';


class CountryDetail extends React.Component {

  state = {}

  render() {


let currentcountry = _.find(countries, ['ccn3', this.props.currentCountry])

    return (
      <div>
<h1>{currentcountry.name.common}</h1>
<h3>{currentcountry.capital} </h3>
<h3>Borders:</h3>
{currentcountry.borders.map(c => <li  ><Link to={"/countries/" + c.ccn3 } id={c}>{
    _.find(countries, ['cca3', c]).name.common

}</Link></li> )}

      </div>
    )
  }

}


export default CountryDetail;