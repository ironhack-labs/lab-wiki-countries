import React from "react";
import Countries from "./countries.json";
// import CountryTag from "./comps/CountryTag";
// import CountryCard from "./comps/CountryCard";
// import { Link, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    countries: Countries,
    flag: null,
  };
  changeFlag = country => {
    this.setState({ flag: country.name.common });
  };
  showCard = country => {
    return <div>{this.state.flag}</div>;
  };

  showList = () => {
    return this.state.countries.map((theOne, i) => {
      return (
        <a
          href="#"
          key={i}
          className="list-group-item list-group-item-action"
          onClick={() => this.changeFlag(theOne)}
        >
          {theOne.name.common}
        </a>
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
          <div className="list-group listBox">{this.showList()}</div>
          <div className="wikiBox">
            <h1>{this.showCard()}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
