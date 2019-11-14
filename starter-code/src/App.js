import React from "react";
import Countries from "./countries.json";
import CountryTag from "./comps/CountryTag";
import CountryCard from "./comps/CountryCard";
// import { Link, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    countries: Countries,
    flag: { name: { common: undefined } },
  };
  changeFlag = country => {
    this.setState({ flag: country });
  };
  showCard = country => {
    return this.state.flag.name.common ? (
      <CountryCard theCountry={this.state.flag} />
    ) : (
      <h3>Select a country.</h3>
    );
  };
  showTags = () => {
    return this.state.countries.map((country, i) => {
      return (
        <CountryTag
          id={i}
          theCountry={country}
          click={() => this.changeFlag(country)}
        />
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div>
            <h2>Wiki Countries</h2>
          </div>
        </header>
        <div className="wikiApp">
          <div className="list-group listBox">{this.showTags()}</div>
          <div className="wikiBox">{this.showCard()}</div>
        </div>
      </React.Fragment>
    );
  }
}
