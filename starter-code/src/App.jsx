import React, { Component } from 'react'
import data from './countries.json'
import './App.css'
import Routes from './Routes'
import {Link} from 'react-router-dom'

class App extends Component {
  state={
    countries:[]
  }

  componentDidMount=()=>{
    this.setState({countries:data})
  }


  render() {
    let {countries} = this.state
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                  {countries.map((ctry,index)=>{
                    return (
                      <Link to={`/${ctry.cca3}`} key={index} className="list-group-item list-group-item-action" >{ctry.flag} {ctry.name.common}</Link>
                      // <a key={index} className="list-group-item list-group-item-action" href={`/${ctry.cca3}`}>{ctry.flag} {ctry.name.common}</a>
                    )
                  })}            
                </div>
              </div>
              <Routes/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
