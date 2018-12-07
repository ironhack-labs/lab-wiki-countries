import React, { Component } from "react";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: undefined };
  }
  componentDidMount() {
    !this.state.countries &&
      axios.get("http://206.189.7.127/countries/a").then(response => {
        this.setState({ countries: response.data });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <CountryList countries={this.state.countries} />
          <Switch>
            <Route
              path="/country/:name"
              countries={this.state.countries}
              //   component={CountryDetails}
              render={props => (
                <CountryDetails
                  {...props}
                  countries={this.state.countries}
                  isAuthed={true}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Content;
