import React from "react"
import { Link } from "react-router-dom"

class NavLink extends React.Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    return (
      <div className = "navlinks">
        <Link to={`/${this.props.country.cca3}`}><sub className = "CCA2">{this.props.country.cca2}</sub>{this.props.country.name.common}</Link>
      </div>
    )
  }
}

export default NavLink;