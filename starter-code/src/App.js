import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Countries from './components/Countries'


class App extends Component {
  
  render() {
    console.log(Countries)
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-5"><Countries /></div>
            <div className="col-7">Column 7/12</div>
          </div>
        </div>
     
        <Switch>
          
        </Switch>
     
      </div>
    )
  }
}

export default App;
