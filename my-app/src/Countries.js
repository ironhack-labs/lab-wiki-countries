import React, { Component } from "react";
import CountriesList from "./countries.json";
import { Link } from 'react-router-dom';
class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: CountriesList
    };
  }
  render() {
    return this.state.countries.map((e, i) => {
      return (
        <div className="list"  key={i}>
           <Link className="list-group-item list-group-item-action" to={`/countries/${e.cca3}`}>
              {e.flag} {e.name.official}
              </Link> 
          </div>
      );
    });
  }
}

export default Countries;
