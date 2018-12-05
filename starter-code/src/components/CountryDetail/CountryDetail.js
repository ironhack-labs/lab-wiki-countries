import React, { Component } from 'react'


export default class CountryDetail extends Component {
  render() {
    return (
      <div>
          <a className={this.props.className} href={this.props.cca3}><p>{this.props.flag}{this.props.name.common}</p></a>
        
      </div>
    )
  }
}
