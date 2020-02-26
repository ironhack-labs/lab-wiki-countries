import React from "react";
import { Link } from "react-router-dom";

export default class Country extends React.Component {
  render() {
    return (
        <div className="list-group-item list-group-item-action">
            <Link to={this.props.id}>{this.props.flag} {this.props.name}</Link>
        </div>
    );
  }
}