import React, { Component } from 'react';
import countries from "../countries.json";
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries
    }
  }

  render() {
    return(
    <div className="container">
    <div className="row">
        <div className="list-group">
        <div className="col-7">
      {countries.map((eachCountry, index) => {
        return (
          <div key={index}>
            <Link className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`} countries={countries}>{eachCountry.flag}{eachCountry.name.common}</Link>
          </div> 
          
          )
      })}
    </div>
    </div>
    </div>
    </div>)
  }
};

export default Home;