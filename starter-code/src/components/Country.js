import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Country extends Component {




  render() {

    const {cca3, name, flag} = this.props.info

    return (
      <div>
        {/* <a href="#" className="list-group-item list-group-item-action active">Cras justo odio (active)</a> */}
        <Link to={`/${cca3}`} className="list-group-item list-group-item-action" > {flag} {name.common} </Link>
      </div>
    )
  }
}

export default Country;
