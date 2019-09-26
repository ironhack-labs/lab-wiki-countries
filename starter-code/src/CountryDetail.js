import React, { Component } from "react";
import Countries from "./countries.json";

export class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      project: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    console.log(id);
    const project = Countries.find(item => item.cca3 === id);
    console.log(project);
    return {
      ...state,
      project
    };
  }

  render() {
    console.log(this.state.project.name);
    return (
      <div>
        <h1>{this.state.project.name.common}</h1>
        <hr></hr>
        <p>capital: {this.state.project.capital[0]}</p>
        <hr></hr>
        <p>currency: {this.state.project.currency[0]}</p>
        <hr></hr>
        <p>region: {this.state.project.region}</p>
        <hr></hr>
        <p>sub region: {this.state.project.subregion}}</p>
        <hr></hr>
      </div>
    );
  }
}

export default CountryDetail;
