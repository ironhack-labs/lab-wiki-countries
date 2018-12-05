import React, { Component } from "react";

export default class Countries extends Component {
  render() {
    return (
      <div>
          {this.props.flag}
     {this.props.name.common}
      </div>
    );
  }
}
