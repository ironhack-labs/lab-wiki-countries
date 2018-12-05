import React, { Component } from 'react'

export default class CountryDetail extends Component {
  render() {
    return (
      <div>
        
          <a href= {this.props.link} className={this.props.className}> <p>{this.props.flag}</p>{this.props.name}</a>
        
      </div>
    )
  }
}
