import React, { Component } from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  // state = {

  // }

  // componentDidMount() {

  //  let myCountry = countries.filter((country, i) => {
  //     if (country.cca3 === this.props.match.params.id) {
  //       return country
  //     }
  //   })

  //   this.setState({
  //     country:  myCountry
  //   })
  // };

  render() {
    let myCountry = countries.find(
      country => country.cca3 === this.props.match.params.id
    );
    return (
      <div className="col-7 text-justify padd">
        <h1>{myCountry.name.common}</h1>
        <table className="table">
          <tr>
            <td>Capital</td>
            <td> {myCountry.capital}</td>
          </tr>
          <tr>
            <td>Area:</td>
            <td>
              {myCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders:</td>
            <td>
              <ul>
                {myCountry.borders.map((border, i) => {
                  let neighbor = countries.find(
                    country => country.cca3 === border
                  );

                  return (
                    <li>
                      <Link to={`/country/${neighbor.cca3}`}>
                        {neighbor.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

{
  /* <p>{myCountry.name.common}</p>
<p>Capital: {myCountry.capital}</p>
<p>Area: {myCountry.area} km<sup>2</sup></p>
<p>Borders:</p>
<ul>
  {myCountry.borders.map((border, i) => {
    let neighbor = countries.find(country => country.cca3 === border)
    return <Link to={`/country/${neighbor.cca3}`}>{neighbor.name.common}<li></li></Link>
  })}
</ul> */
}
