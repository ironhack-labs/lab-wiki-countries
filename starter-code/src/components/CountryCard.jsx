import React, { Component } from "react";

export class CountryCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <a
          class="list-group-item list-group-item-action"
          href={`/${this.props.cca3}`}
        >
          {this.props.flag} {this.props.name.common}
        </a>
      </div>
    );
  }
}

export default CountryCard;
