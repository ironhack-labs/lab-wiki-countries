import React, { Component } from 'react'
var emojiFlags = require('emoji-flags');


export default class CountryDetail extends Component {
  render() {
    let clase = "em em-flag-" + this.props.flag;
    let url = "http://localhost:3000/about/" + this.props.name;
    return (
      <div>
       <p><a href={url}> <i class={clase}></i> {this.props.name}</a></p> 
      </div>
    )
  }
}
