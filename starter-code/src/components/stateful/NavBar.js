import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <nav className="col-md-3 navBar">
        <ul>
         {this.props.countries.map( (elm, idx) => {

            return (
              <li key={idx}><Link to={`/${idx}`}>{elm.flag}{elm.name.common}</Link></li>
            )

         })} 
        </ul>
      </nav>
    )
  }

}

export default NavBar