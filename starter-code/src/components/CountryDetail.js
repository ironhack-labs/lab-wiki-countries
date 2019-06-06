import React, { Component } from 'react';
import queryString from "query-string"
import Countries from "../countries.json"
import Country from './Country.js';
import {Link} from "react-router-dom"

class CountryDetail extends Component {
  constructor(props){
    super(props)

    this.state={
      
    }
  }
  render() {
        const qString = queryString.parse(this.props.location.search)        // Query string
const border = qString.borders.split(",")

const borderCountries = border.map(elm =>{
  return Countries.find(Country =>{
    return Country.cca3 === elm
  })
})

    
    return (
      <article className="country">
        <h1 className="name">
          {qString.name} {qString.flag}
        </h1>
        <p className="region">{qString.region}</p>
        <p className="capital">{qString.capital}</p>
        <p>{qString.area} KM </p>
        <ul>
          {borderCountries.map(elm => (
            <li key={elm.cca3}>
              {" "}
              <Link
                to={`/${elm.cca3}?name=${elm.name.official}&flag=${
                  elm.flag
                }&region=${elm.region}&area=${elm.area}&borders=${
                  elm.borders
                }&capital=${elm.capital}`}
              >
              {elm.name.common}
            </Link></li>

          ))}
          <li><Link to="/">a casita a ver cositas cuquis</Link></li>
        </ul>
      </article>
    );
  }
}

export default CountryDetail;
