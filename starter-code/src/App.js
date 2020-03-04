import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ListCountries from "./components/ListCountries";
import CountryDetail from "./components/CountryDetail";
import axios from "axios";

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
      )
      .then(res => {
        this.setState({ countries: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <ListCountries countries={this.state.countries} />
                  )}
                />
              </Switch>
            </div>
            <div className="col-7">
              <Switch>
                <Route
                  path="/:countryId"
                  component={props => <CountryDetail {...props} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
