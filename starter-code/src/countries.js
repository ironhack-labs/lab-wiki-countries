import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

class Countries extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}} >
            <div className="list-group">
              {
                this.props.country.map((e, idx) => (
                  <Link className="list-group-item list-group-item-action" path={`/${e.cca3}`} to={`/${e.cca3}`}> {e.flag} {e.name.common}</Link>
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Countries;
