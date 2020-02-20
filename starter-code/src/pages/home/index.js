import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        countrie:countries 
      }
    
      

    render() {
      return (
       <div>
           <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to={`/`}>WikiCountries</Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
            {this.state.countrie.map(city => (
          <Link className="list-group-item list-group-item-action" to={`/${city.cca3}`}>
          {city.flag} {city.name.official}
          </Link>
        ))}
            
              
            </div>
          </div>
          

        </div>
      </div>
    </div>
  </div>
       </div>
      )
    }
  }
  
  export default Home
  