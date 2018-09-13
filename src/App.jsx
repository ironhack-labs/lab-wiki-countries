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
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <List data={data} />
          <Route
            path="/:cc"
            render={() => {
              return <Details countries={this.state.countries} />;
            }}
          />
        </div>
      </div>
    );
  }

  _searchCountry(){
    
  }
}

export default index;
