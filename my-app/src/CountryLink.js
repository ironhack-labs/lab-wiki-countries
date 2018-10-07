import React from "react";
import { Link } from 'react-router-dom';

export default class CountryLink extends React.Component {
  constructor (props) {
    super(props);
    let {cca3, flag, name} = this.props
    this.state = {
      cca3: cca3,
      name: name,
      flag: flag
    }
  }

  render () {
    return(
      <li>
        <Link to={`/${this.state.cca3}`} className="list-group-item list-group-item-action">
          {this.state.flag}
          {this.state.name}
        </Link> 
      </li>
    )
  }
}
