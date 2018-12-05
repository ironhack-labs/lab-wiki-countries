import React, { Component } from "react";

class CountryDetail extends Component {
  render() {
    return (
      <div key={this.props.idx}>
        <div class="list-group">
          <a class="list-group-item list-group-item-action"
            href={this.props.pais.cca3}>{this.props.pais.flag} {this.props.pais.name.common}
          </a>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
