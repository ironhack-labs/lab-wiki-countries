import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Header from "./Header";
import List from "./List";
import Details from "./Details";
import data from "./countries";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: data
    };

    this._searchCountry = this._searchCountry.bind(this);
  }

  render() {
    return (
      <div>
        <Header searchCountry={this._searchCountry} />
        <div className="content">
          <List data={this.state.countries} />
          <Route
            path="/:cc"
            render={() => {
              return <Details countries={data} />;
            }}
          />
        </div>
      </div>
    );
  }
  _searchCountry(event) {
    let newCountries = data.filter(el => {
      return el.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({
      countries: newCountries
    });
  }
}

export default index;
