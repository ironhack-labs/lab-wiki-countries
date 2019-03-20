import React, { Component } from 'react'
import '../App.css';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

class CountryDetail extends Component {

  render() {
    const selectedCountry = countries.find(country => {
      return country.cca3 === this.props.match.params.cca3
    })

    return (
        <section>
            <h2>{selectedCountry.name.common}</h2>
            <h3>Capital: {selectedCountry.capital}</h3>
            <p>Area: {selectedCountry.area} km2</p>
        <article>
            <p>
            Borders:
            <ul>
                {selectedCountry.borders.map((borderCountry, index) =>{
                  return <li key={index}>
                            <Link to={`/country/${borderCountry}`}>
                              {borderCountry}
                            </Link>
                        </li>
                })}
            </ul>
            </p>
        </article>
      </section>
    )
  }
}

export default CountryDetail