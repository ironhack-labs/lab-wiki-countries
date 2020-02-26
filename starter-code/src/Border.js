import React from "react";
import { Link } from "react-router-dom";

export default class Border extends React.Component {
  render() {
    return (
        <li>
            <Link to={this.props.border}>{this.props.border}</Link>
        </li>
    );
  }
}