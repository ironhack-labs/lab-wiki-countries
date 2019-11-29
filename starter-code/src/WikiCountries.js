import React, {Component} from "react";
import countriesJSON from "./countries.json";
import { NavLink } from "react-router-dom";

class WikiCountries extends Component {

  state = {
    countries: countriesJSON
  }

  render(){
    console.log(this.state.countries);
    return (
      <div className="col-5">
        <div
          className="list-group"
          style={{ textAlign: "start", overflow: "scroll", height: "80vh" }}
        >
          {this.state.countries.map(value => {
            return (
              <NavLink
                key={value.ccn3}
                className="list-group-item list-group-item-action" 
                to={`/${value.cca3}`}
              >
                {value.flag} {value.name.common}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
  
};

export default WikiCountries;
