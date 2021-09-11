import React from 'react';

export default class CountryDetails extends React.Component {
    
  render() {
    const { match, location, history } = this.props
    console.log(this.props)
    return (
      <div className="CountryDetails">
        <div>
          {/* <h1>{country.name}</h1> */}
          <hr />
        </div>
        <div>
          <p>
            <strong>Capital</strong>
          </p>
          {/* <p>{country.capital}</p> */}
          <hr />
        </div>
        <div>
          <p>
            <strong>Area</strong>
          </p>
          <p>
            {/* {country.area}km<sup>2</sup> */}
          </p>
          <hr />
        </div>
        <div>
          <p>
            <strong>Borders</strong>
          </p>
          <ul>
            {/* {countries.map((country) => (
              <li key={country.name.common}>
                <Link to={`/countries/${country.cca3}`}>
                  <h4>{country.name.common}</h4>
                </Link>
              </li> */}
            {/* ))} */}
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
