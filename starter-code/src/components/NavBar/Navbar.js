import React, { Component } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://raw.githubusercontent.com/mledoze/countries/master/countries.json`
      )
      .then(res => {
        const countries = res.data;
        this.setState({ ...this.state, countries: countries });
      });
  }

  render() {
    return (
      <div className="NavBar">
        <nav className="vertical-menu col-2">
          <ul className="nav flex-column">
            {this.state.countries.map(country => (
              <li className="nav-item">
                <Link className="nav-link active text-left" to={country.cca3}>
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
