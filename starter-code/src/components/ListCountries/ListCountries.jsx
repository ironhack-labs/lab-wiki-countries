import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./ListCountries.css"

class ListCountries extends Component {
  render() {
    return (
      <div className="ListCountries">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
            <Link to={`/CountryDetail/${this.props.cca3}`}>
                {this.props.flag}
                {this.props.name.common}
            </Link>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCountries;
