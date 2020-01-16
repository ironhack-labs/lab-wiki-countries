import React, { Component } from "react";
import Countries from "./Countries";
import Detail from "./Detail";
import countries from "../countries.json";
import { Switch, Route } from "react-router-dom";

class Body extends Component {
  state={
    regionSelected: 'ABW'
  }

  handleSelect = regionSelected => this.setState({ regionSelected })
  selectRegion = () => countries.find(({ cca3 }) => cca3 === this.state.regionSelected)
  getLink = () => this.state.regionSelected ? this.state.regionSelected : '/' 

  // Convertir arr borders => {'ABW': 'Aruba'} => borders[country.acc3]

  render() {
    const { regionSelected } = this.state
    const { handleSelect, selectRegion, getLink } = this
    return (
      <div className="container">
        <div className="row">
          <div className="list-group col-5">
            <Countries {...{countries, regionSelected, handleSelect, link: getLink()}} />
          </div>
          <div className="Details col-7">
          <Switch>
            <Route
              exact
              path="/:id"
              component={() =>
                <Detail {...{country: selectRegion(), handleSelect}}/>} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
