import React, { Component } from "react";
import Country from './Country';
import countries from './countries.json'

class Countries extends Component {


  render() {
    return (
      <div className="">
      <ul>

      {countries.map(c=> 
          <li>{c.name}</li>
      )}
      </ul>
      </div>
    );
  }
}

export default Countries;
