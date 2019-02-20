import React, { Component } from "react";
import countries from "../../countries.json";
import { Link } from "react-router-dom";
export default class CountryList extends Component {
  render() {
    const routeCca = this.props.cca;
    return (
      <div>
        <div className="list-group">
          {countries.map(country => {
            const name = country.name.common;
            const cca = country.cca3;
            const flag = country.flag;
            const isActive = cca === routeCca;
            return (
              <Link
                key={cca}
                className={
                  "list-group-item list-group-item-action" +
                  (isActive ? " active" : "")
                }
                to={"/" + cca}
              >
                <span role="img" aria-label={name}>
                  {" "}
                  {flag}
                </span>{" "}
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
