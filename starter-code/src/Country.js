import React, { Component } from 'react'

export default class Country extends Component {
  render() {
    return (
      <div class="list-group">
              <a class="list-group-item list-group-item-action" href="/ABW">{this.props.flag} {this.props.name}</a>
      </div>
    )
  }
}
