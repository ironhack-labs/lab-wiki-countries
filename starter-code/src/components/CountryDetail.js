import React, { Component } from "react";
import { Link } from "react-router-dom";
import countryArray from "../countries.json";


function findCountry(idUrl) {
  return countryArray.find(oneCountry => {
    return oneCountry.cca3 === idUrl;
  });
}


class CountryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: countryArray
    }
  }

  render() {

    const { params } = this.props.match;
    const countryItem = findCountry(params.idUrl);

    return (
            <section className="CountryDetail">
              <h1>{countryItem.name.common}</h1>
              <tr class="table">
                <tr>
                  <td>Capital</td>
                  <td>{countryItem.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countryItem.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                <td>Borders</td>
                  {countryItem.borders.map(oneBorder => {
                    return (
                  <li> <Link to={`/${oneBorder}`}>{findCountry(oneBorder).name.common}</Link> </li>    
                  
                    );
                    }
                  )}
                   
                </tr>
              </tr>
            </section>
    );
  }
}


export default CountryDetail;