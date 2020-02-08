import React, { Component } from "react";
import { Link } from "react-router-dom";

class Countries extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link className="clearLinkStyle" to={`/country/${this.props.key}`}>
        <button type="button" className="btn btn-lg btn-block">
          {this.props.flag}
          {this.props.name}
        </button>
      </Link>
    );
  }
}

export default Countries;
