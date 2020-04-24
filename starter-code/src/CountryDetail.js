import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  componentDidMount = () => {
    //window.onload happens once when the components first mounts}
    // console.log(this.props.match.params.id)
    //find method ... js find
    /**ENTER CODE HERE **/
  };

  // Child = ({ match }) => (
  //   match.params.id
  //    )

  // showDetails = () => {

  // }

  render() {
    // console.log(this.Child)
    // console.log(this.state.country.name.common)
    let id = this.props.match.params.id;
    let country = this.props.countries.find((eachCountry) => {
      return eachCountry.cca3 === id;
    });

    return (
      <div>
        Country Details <br />
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%;" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((eachBorder) => {
                    let country = this.props.country.find(
                      (country) => country.cca3 === eachBorder
                    );
                    return (
                      <li>
                        <Link to={"/country/" + country.cca3}>
                          {country.name.common}
                        </Link>
                      </li>
                    );
                    //{/* return (<li key={cca3}>
                    //    <Link to={"/country/"+cca3}>
                    //    {this.props.country.find(country=> country.flag === cca3).name.common}</Link>
                    //  </li>) */}
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
