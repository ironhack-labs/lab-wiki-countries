import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import axios from "axios";

const countriesApiUrl =
  "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

const countriesArray = () => axios.get(countriesApiUrl);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    countriesArray().then(({ data }) => {
      this.setState({
        countries: data
      });
    });
  }

  render() {

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {this.state.countries.map((country, idx) => {
                  return (
                    <Link key={idx} to={ `/${country.cca3}` } 
                      className="list-group-item list-group-item-action">
                      <span role="img" aria-label={country.name.common}>{country.flag}</span>{country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/:cca3"
                render={(props) => {
                  const chosenCountry = this.state.countries.find(c => c.cca3 === props.match.params.cca3);

                  let borders = this.state.countries.filter(c => c.borders.includes(props.match.params.cca3));
                  borders = borders.map(res => {
                    return {
                      name: res.name.common,
                      cca3: res.cca3
                    }
                  })

                  if (chosenCountry) {
                    return (<CountryDetail 
                              name={chosenCountry.name.common}
                              area={chosenCountry.area}
                              capital={chosenCountry.capital}
                              borders={borders}
                            />);
                  }

                  return <p>
                    {`${props.match.params.cca3}... Not found`}
                  </p>
                
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
