import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  render() {
    return (
      <div key={this.props.idx}>
        <div class="list-group">
          
            <Link to={this.props.pais.cca3}>{this.props.pais.flag} {this.props.pais.name.common}</Link>
        
        </div>
      </div>
    );
  }
}

export default CountryDetail;

