import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export default class Countries extends Component {
  render() {
    return (
      <div>
      <Link to={`/${this.props.countryElement.cca3}`}>
        <li>{this.props.countryElement.name.official} In your face</li>
      </Link>        
      </div>
    )
  }
}

