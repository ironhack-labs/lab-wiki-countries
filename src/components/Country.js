import React, { Component } from 'react'

export default class Country extends Component { 
  render() {
    return (
      <div>
          <button onClick={this.props.handleClick} value={this.props.value}>{this.props.children}</button>
      </div>
    )
  }
}
