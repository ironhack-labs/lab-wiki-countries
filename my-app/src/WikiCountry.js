import React, { Component } from "react";
import "./style.css";
import countriesjason from "./countries.json";
import { Route, NavLink } from "react-router-dom";
import { CountryDetail } from "./Components/CountryDetail";

// import Navigation from "./Navigation";

export class WikiCountry extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: countriesjason
    };
  }

  render() {
    // console.log(this.state.countries);

    return (
      <div className="container">
        <img
          src="../img/country-search.jpg"
          height="250"
          width="450"
          alt="imagen"
        />
        <div className="panel panel-heading">
          <h2>Country List</h2>
        </div>

        <div className="row">
          <div className="col-5">
            <h3>Search Country</h3>
            <div className="list-group">
              {this.state.countries.map((ele, i) => {
                // console.log(ele.cca3, i, ele.name.common);
                return (
                  <NavLink
                    key={ele.cca3}
                    to={'/'+ele.cca3}
                    className="list-group-item list-group-item-action disable"
                  >
                    {ele.flag} {ele.name.common}
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="col-7">
            <h3>Details</h3>
            <div className="list-group">
              <Route
                path="/:id"
                render={(props) => (
                  <CountryDetail
                    id={props.match.params.id}
                    data={this.state.countries}
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* <Switch>
            <Route exact path="/" component={CountryDetail} />
            <Route path="/about/:id/:order" component={About} />
          </Switch> */}
      </div>
    );
  }
}
