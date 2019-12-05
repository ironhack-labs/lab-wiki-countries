import React, { Component } from "react";
import countries from "./../../countries.json";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CountryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const currentCountryId = this.props.match.params.cca3;
    const previousCountryId = previousProps.match.params.cca3;
    if (currentCountryId !== previousCountryId) {
      this.fetchData();
    }
  }

  fetchData() {
    const countryId = this.props.match.params.cca3;
    const information = countries.find(value => {
      if (value.cca3.toLowerCase() === countryId.toLowerCase()) {
        return value;
      }
    });
    this.setState({
      information: information
    });
  }

  render() {
    const information = this.state.information;
    console.log("RENDER INFO", information);
    return (
      <div>
        <div class="col-7">
          {information && (
            <div>
              <h1>{information.name.common}</h1>
              <h2>{information.flag}</h2>
            </div>
          )}
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                {information && <td>{information.capital[0]}</td>}
              </tr>
              <tr>
                {information && (
                  <td>
                    {information.area}km<sup>2</sup>
                  </td>
                )}
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {information && (
                    <ul>
                      {information.borders.map(val => {
                        return <li><Link to={`/${val}`}>{val}</Link></li>;
                      })}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountryView;
