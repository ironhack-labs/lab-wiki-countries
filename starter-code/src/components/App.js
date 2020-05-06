/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Component} from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

import { Switch, Route, Redirect } from 'react-router-dom'
import CountryDetail from './country-details/country-detail'


class App extends Component {

  constructor () {

    super()

    this.state = {
      countries: countries
    }

  }


  render() {
    
    return (

    <div className="container">
      <div className="row">
          <div className="col-5" style={{maxHeight: '70vh', overflow: 'scroll'}}>
            <div className='list-group'>
            {this.state.countries.map((elm, idx) => (
              <Link className='list-group-item list-group-item-action' key={idx} to={elm.cca3}>
                {elm.name.common + elm.flag}
              </Link>
              ))}
              </div>
          </div>
          <Switch>

          <Route path="/:cca3" render={(props) => <CountryDetail {...props} />} />

          </Switch>
      </div>
    </div>
    
    )
  }


}

export default App




